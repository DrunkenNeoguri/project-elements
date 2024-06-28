export default function Stepper({ currentStep }: { currentStep: number }) {
  const handleChangeBackgroundColor = (
    indexStep: number,
    currentStep: number
  ) => {
    return currentStep >= indexStep ? "bg-primaryLight" : "bg-white";
  };

  return (
    <div className="flex justify-center items-center pt-5 box-border">
      <div
        className={
          "flex justify-center items-center pt-[2px] rounded-[50%] font-bold12 text-primaryDeep h-6 w-6 box-border " +
          handleChangeBackgroundColor(0, currentStep)
        }
      >
        1
      </div>
      <div
        className={
          "w-[calc((100%-96px)/3)] h-[2px] " +
          handleChangeBackgroundColor(1, currentStep)
        }
      />
      <div
        className={
          "flex justify-center items-center pt-[2px] rounded-[50%] font-bold12 text-primaryDeep h-6 w-6 box-border " +
          handleChangeBackgroundColor(1, currentStep)
        }
      >
        2
      </div>
      <div
        className={
          "w-[calc((100%-96px)/3)] h-[2px] " +
          handleChangeBackgroundColor(2, currentStep)
        }
      />
      <div
        className={
          "flex justify-center items-center pt-[2px] rounded-[50%] font-bold12 text-primaryDeep h-6 w-6 box-border " +
          handleChangeBackgroundColor(2, currentStep)
        }
      >
        3
      </div>
      <div
        className={
          "w-[calc((100%-96px)/3)] h-[2px] " +
          handleChangeBackgroundColor(3, currentStep)
        }
      />
      <div
        className={
          "flex justify-center items-center pt-[2px] rounded-[50%] font-bold12 text-primaryDeep h-6 w-6 box-border " +
          handleChangeBackgroundColor(3, currentStep)
        }
      >
        4
      </div>
    </div>
  );
}
