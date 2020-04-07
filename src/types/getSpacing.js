import { camelCase } from "../utils";

const getSpacing = (layerName, stylesArtboard) => {
  const palette = { spacing: {} };
  const paletteArtboard = stylesArtboard.filter(
    (item) => item.name === layerName
  )[0].children;

  paletteArtboard.map((item) => {
    if (item.type === "COMPONENT") {
      const { name, absoluteBoundingBox } = item;
      const spacingObj = {
        [camelCase(name)]: { value: `${absoluteBoundingBox.width}px` },
      };
      Object.assign(palette.spacing, spacingObj);
    }
  });

  return palette;
};

export default getSpacing;
