import requests
import pandas as pd
import time
import re

# Set up the default search parameters
CITIES = ["Mangalagiri", "Vijayawada", "Hyderabad"]

# Overpass API query parameters
# We map the keywords to OpenStreetMap tags.
# boutiques -> shop=boutique
# premium clothing retail / silk stores -> shop=clothes
OVERPASS_URL = "http://overpass-api.de/api/interpreter"

def build_query(city):
    """
    Builds an Overpass API query to find boutiques and clothing stores in a given city.
    """
    return f"""
    [out:json][timeout:25];
    area["name"="{city}"]->.searchArea;
    (
      node["shop"="boutique"](area.searchArea);
      way["shop"="boutique"](area.searchArea);
      relation["shop"="boutique"](area.searchArea);
      node["shop"="clothes"](area.searchArea);
      way["shop"="clothes"](area.searchArea);
      relation["shop"="clothes"](area.searchArea);
    );
    out center;
    """

def check_website(url):
    """
    Checks if a URL returns a 200 status code and whether it uses HTTPS.
    Returns (is_working, has_ssl).
    """
    if not url:
        return False, False

    if not url.startswith('http'):
        url = 'http://' + url

    has_ssl = url.startswith('https://')
    is_working = False

    try:
        # Provide a User-Agent to prevent basic blocking
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
        response = requests.get(url, headers=headers, timeout=5)

        if response.status_code == 200:
            is_working = True
            # If it redirected to HTTPS, it has SSL
            if response.url.startswith('https://'):
                has_ssl = True
    except requests.exceptions.RequestException:
        is_working = False

    return is_working, has_ssl

def main():
    print("======================================================")
    print("      Local Lead Generation Scraper - Starting...     ")
    print("======================================================")
    print("Instructions to execute this script from Windows Command Prompt:")
    print("  1. Open Command Prompt (cmd.exe)")
    print("  2. Navigate to the directory containing this script.")
    print("  3. Run: pip install -r requirements.txt")
    print("  4. Run: python scraper.py")
    print("======================================================\n")

    all_leads = []

    for city in CITIES:
        print(f"Querying OpenStreetMap (Overpass API) for {city}...")
        query = build_query(city)
        headers = {
            'User-Agent': 'LeadGenScraper/1.0',
            'Accept': '*/*'
        }

        try:
            response = requests.get(OVERPASS_URL, params={'data': query}, headers=headers, timeout=30)
            if response.status_code == 200:
                data = response.json()
                elements = data.get("elements", [])
                print(f"  Found {len(elements)} potential businesses in {city}.")

                for el in elements:
                    tags = el.get("tags", {})

                    # Business Name
                    name = tags.get("name")
                    if not name:
                        continue # Skip if no name

                    # Phone Number
                    phone = tags.get("phone") or tags.get("contact:phone") or "Not Available"

                    # Address
                    street = tags.get("addr:street", "")
                    housenumber = tags.get("addr:housenumber", "")
                    postcode = tags.get("addr:postcode", "")
                    address_parts = [p for p in [housenumber, street, city, postcode] if p]
                    address = ", ".join(address_parts)
                    if not address:
                        address = f"{city} (Lat: {el.get('lat', el.get('center', {}).get('lat'))}, Lon: {el.get('lon', el.get('center', {}).get('lon'))})"

                    # Website URL
                    website = tags.get("website") or tags.get("contact:website") or "Not Available"

                    # Website Check
                    is_working = "N/A"
                    has_ssl = "N/A"
                    if website != "Not Available":
                        is_working, has_ssl = check_website(website)

                    all_leads.append({
                        "Business Name": name,
                        "Phone Number": phone,
                        "Physical Address": address,
                        "Website URL": website,
                        "Website Works (200 OK)": is_working,
                        "Has SSL (HTTPS)": has_ssl,
                        "City": city
                    })
            else:
                print(f"  Failed to query {city}. Status code: {response.status_code}")
        except Exception as e:
            print(f"  Error querying {city}: {e}")

        # Polite delay to not overload the API
        time.sleep(2)

    print(f"\nTotal leads extracted: {len(all_leads)}")

    # Save to CSV
    if all_leads:
        print("Saving data to leads_output.csv...")
        df = pd.DataFrame(all_leads)
        df.to_csv("leads_output.csv", index=False, encoding='utf-8')
        print("Successfully saved to leads_output.csv")
    else:
        print("No leads were found to save.")

if __name__ == "__main__":
    main()
