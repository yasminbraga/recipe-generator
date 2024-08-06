export function mergeItemsAndQtd(data: any) {
  const items: string[] = [];
  for (const [key, value] of Object.entries(data)) {
    if (key.startsWith("strIngredient") && value !== "" && value !== null) {
      const itemIndex = key.replace("strIngredient", "");
      const itemMeasureKey = `strMeasure${itemIndex}`;
      const itemMeasure = data[itemMeasureKey];
      items.push(`${itemMeasure} ${value}`);
    }
  }
  return items;
}
