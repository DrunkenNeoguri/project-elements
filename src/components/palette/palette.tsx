"use client";
import { MouseEvent, useContext } from "react";
import { BottomSheetContext } from "../bottom-sheet/bottom-sheet";

export default function Palette() {
  const bottomSheetContext = useContext(BottomSheetContext);

  if (!bottomSheetContext) {
    return;
  }
  const { bottomSheetData, handleBottomSheetData } = bottomSheetContext;

  const handleSelectedColor = (palatteColor: string) =>
    bottomSheetData.categoryColorTheme === palatteColor
      ? "border-2 border-primary"
      : "border-2 border-white";

  const handleChageCategoryColor = (e: MouseEvent<HTMLButtonElement>) => {
    handleBottomSheetData(
      "categoryColorTheme",
      e.currentTarget.id.substring(
        e.currentTarget.id.length - 2,
        e.currentTarget.id.length
      )
    );
  };

  return (
    <div className="flex flex-col w-full pt-3 gap-3">
      <div className="flex justify-between w-full">
        <button
          title="색상1"
          type="button"
          id="paletteColor01"
          className={
            "w-8 h-8 rounded-full outline-none bg-paletteColor01 " +
            handleSelectedColor("01")
          }
          onClick={handleChageCategoryColor}
        />
        <button
          title="색상2"
          type="button"
          id="paletteColor02"
          className={
            "w-8 h-8 rounded-full outline-none bg-paletteColor02 " +
            handleSelectedColor("02")
          }
          onClick={handleChageCategoryColor}
        />
        <button
          title="색상3"
          type="button"
          id="paletteColor03"
          className={
            "w-8 h-8 rounded-full outline-none bg-paletteColor03 " +
            handleSelectedColor("03")
          }
          onClick={handleChageCategoryColor}
        />
        <button
          title="색상4"
          type="button"
          id="paletteColor04"
          className={
            "w-8 h-8 rounded-full outline-none bg-paletteColor04 " +
            handleSelectedColor("04")
          }
          onClick={handleChageCategoryColor}
        />
        <button
          title="색상5"
          type="button"
          id="paletteColor05"
          className={
            "w-8 h-8 rounded-full outline-none bg-paletteColor05 " +
            handleSelectedColor("05")
          }
          onClick={handleChageCategoryColor}
        />
        <button
          title="색상6"
          type="button"
          id="paletteColor06"
          className={
            "w-8 h-8 rounded-full outline-none bg-paletteColor06 " +
            handleSelectedColor("06")
          }
          onClick={handleChageCategoryColor}
        />
        <button
          title="색상7"
          type="button"
          id="paletteColor07"
          className={
            "w-8 h-8 rounded-full outline-none bg-paletteColor07 " +
            handleSelectedColor("07")
          }
          onClick={handleChageCategoryColor}
        />
      </div>
      <div className="flex justify-between w-full">
        <button
          title="색상8"
          type="button"
          id="paletteColor08"
          className={
            "w-8 h-8 rounded-full outline-none bg-paletteColor08 " +
            handleSelectedColor("08")
          }
          onClick={handleChageCategoryColor}
        />
        <button
          title="색상9"
          type="button"
          id="paletteColor09"
          className={
            "w-8 h-8 rounded-full outline-none bg-paletteColor09 " +
            handleSelectedColor("09")
          }
          onClick={handleChageCategoryColor}
        />
        <button
          title="색상10"
          type="button"
          id="paletteColor10"
          className={
            "w-8 h-8 rounded-full outline-none bg-paletteColor10 " +
            handleSelectedColor("10")
          }
          onClick={handleChageCategoryColor}
        />
        <button
          title="색상11"
          type="button"
          id="paletteColor11"
          className={
            "w-8 h-8 rounded-full outline-none bg-paletteColor11 " +
            handleSelectedColor("11")
          }
          onClick={handleChageCategoryColor}
        />
        <button
          title="색상12"
          type="button"
          id="paletteColor12"
          className={
            "w-8 h-8 rounded-full outline-none bg-paletteColor12 " +
            handleSelectedColor("12")
          }
          onClick={handleChageCategoryColor}
        />
        <button
          title="색상13"
          type="button"
          id="paletteColor13"
          className={
            "w-8 h-8 rounded-full outline-none bg-paletteColor13 " +
            handleSelectedColor("13")
          }
          onClick={handleChageCategoryColor}
        />
        <button
          title="색상14"
          type="button"
          id="paletteColor14"
          className={
            "w-8 h-8 rounded-full outline-none bg-paletteColor14 " +
            handleSelectedColor("paletteColor14")
          }
          onClick={handleChageCategoryColor}
        />
      </div>
    </div>
  );
}
