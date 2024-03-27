import pandas as pd
import json
from unidecode import unidecode

def remove_accents_and_lowercase(text):

    text = str(text)
    text = unidecode(text)
    text = text.lower()
    return text

# Read the Excel file
xls = pd.ExcelFile('atlas_salles.xlsx')

# Read each sheet in the Excel file as a DataFrame and store them in a dictionary
dfs = {sheet_name: xls.parse(sheet_name) for sheet_name in xls.sheet_names}

# Define the columns you want to keep
columns_to_keep = ['DESIGNATION BATIMENT', 'DESIGNATION ETAGE', 'CODE LOCAL', 'DESIGNATION USAGE']

# For each DataFrame, select the columns you want to keep and save as a JSON file
for sheet_name, df in dfs.items():
    # Select only the columns you want to keep that are present in the DataFrame
    df = df[df.columns.intersection(columns_to_keep)]

    # For each row in the DataFrame, create a JSON document and save it
    for index, row in df.iterrows():
        # Create a dictionary for the JSON document
        doc = {
            'id': remove_accents_and_lowercase(row['CODE LOCAL']) if 'CODE LOCAL' in row else None,
            'batiment': remove_accents_and_lowercase(row['DESIGNATION BATIMENT']) if 'DESIGNATION BATIMENT' in row else None,
            'etage': remove_accents_and_lowercase(row['DESIGNATION ETAGE']) if 'DESIGNATION ETAGE' in row else None,
            'usage': remove_accents_and_lowercase(row['DESIGNATION USAGE']) if 'DESIGNATION USAGE' in row else None,
            'departement': remove_accents_and_lowercase(sheet_name)
        }

        # Convert the dictionary to a JSON string
        json_str = json.dumps(doc)

        # Write the JSON string to a file
        with open(f'{sheet_name}_{index}.json', 'w') as f:
            f.write(json_str)