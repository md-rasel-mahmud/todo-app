import TopBarProgress from "react-topbar-progress-indicator";

const CustomLoader = () => {
  TopBarProgress.config({
    barColors: {
      0: "rgba(206, 99, 0, 0.5)",
      0.5: "#8cf067",
      "1.0": "#f25a55",
    },
    shadowBlur: 5,
  });
  return (
    <>
      <TopBarProgress />
    </>
  );
};

export default CustomLoader;
