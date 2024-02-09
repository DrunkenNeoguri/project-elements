export const setButtonBackgroundColor = (type?: "primary" | "invalid") => {
  switch (type) {
    case "invalid":
      return "#909090";
    default:
      return "#1E90FF";
  }
};
