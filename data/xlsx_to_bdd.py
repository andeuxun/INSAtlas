import pandas as pd

# Read the Excel file
xls = pd.ExcelFile('atlas_salles.xlsx')

# Read each sheet in the Excel file as a DataFrame and store them in a dictionary
dfs = {sheet_name: xls.parse(sheet_name) for sheet_name in xls.sheet_names}

# Define the columns you want to keep
columns_to_keep = ['DESIGNATION BATIMENT', 'CODE ETAGE', 'CODE LOCAL', 'DESIGNATION USAGE']

# For each DataFrame, select the columns you want to keep and save as a JSON file
for sheet_name, df in dfs.items():
    # Select only the columns you want to keep that are present in the DataFrame
    df = df[df.columns.intersection(columns_to_keep)]

    # Convert the DataFrame to JSON and save
    df.to_json(f'{sheet_name}.json', orient='records')