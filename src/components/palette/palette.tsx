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
    bottomSheetData.categoryColor === palatteColor
      ? "border-2 border-primary"
      : "border-2 border-white";

  const handleChageCategoryColor = (e: MouseEvent<HTMLButtonElement>) => {
    handleBottomSheetData("categoryColor", e.currentTarget.id);
  };

  return (
    <div className="flex flex-col w-full px-4 pt-3 gap-3">
      <div className="flex justify-between w-full">
        <button
          type="button"
          id="paletteColor01"
          className={
            "w-7 h-7 rounded-full outline-none bg-paletteColor01 " +
            handleSelectedColor("paletteColor01")
          }
          onClick={handleChageCategoryColor}
        />
        <button
          type="button"
          id="paletteColor02"
          className={
            "w-7 h-7 rounded-full outline-none bg-paletteColor02 " +
            handleSelectedColor("paletteColor02")
          }
        />
        <button
          type="button"
          id="paletteColor03"
          className={
            "w-7 h-7 rounded-full outline-none bg-paletteColor03 " +
            handleSelectedColor("paletteColor03")
          }
          onClick={handleChageCategoryColor}
        />
        <button
          type="button"
          id="paletteColor04"
          className={
            "w-7 h-7 rounded-full outline-none bg-paletteColor04 " +
            handleSelectedColor("paletteColor04")
          }
          onClick={handleChageCategoryColor}
        />
        <button
          type="button"
          id="paletteColor05"
          className={
            "w-7 h-7 rounded-full outline-none bg-paletteColor05 " +
            handleSelectedColor("paletteColor05")
          }
          onClick={handleChageCategoryColor}
        />
        <button
          type="button"
          id="paletteColor06"
          className={
            "w-7 h-7 rounded-full outline-none bg-paletteColor06 " +
            handleSelectedColor("paletteColor06")
          }
          onClick={handleChageCategoryColor}
        />
        <button
          type="button"
          id="paletteColor07"
          className={
            "w-7 h-7 rounded-full outline-none bg-paletteColor07 " +
            handleSelectedColor("paletteColor07")
          }
          onClick={handleChageCategoryColor}
        />
      </div>
      <div className="flex justify-between w-full">
        <button
          type="button"
          id="paletteColor08"
          className={
            "w-7 h-7 rounded-full outline-none bg-paletteColor08 " +
            handleSelectedColor("paletteColor08")
          }
          onClick={handleChageCategoryColor}
        />
        <button
          type="button"
          id="paletteColor09"
          className={
            "w-7 h-7 rounded-full outline-none bg-paletteColor09 " +
            handleSelectedColor("paletteColor09")
          }
          onClick={handleChageCategoryColor}
        />
        <button
          type="button"
          id="paletteColor10"
          className={
            "w-7 h-7 rounded-full outline-none bg-paletteColor10 " +
            handleSelectedColor("paletteColor10")
          }
          onClick={handleChageCategoryColor}
        />
        <button
          type="button"
          id="paletteColor11"
          className={
            "w-7 h-7 rounded-full outline-none bg-paletteColor11 " +
            handleSelectedColor("paletteColor11")
          }
          onClick={handleChageCategoryColor}
        />
        <button
          type="button"
          id="paletteColor12"
          className={
            "w-7 h-7 rounded-full outline-none bg-paletteColor12 " +
            handleSelectedColor("paletteColor12")
          }
          onClick={handleChageCategoryColor}
        />
        <button
          type="button"
          id="paletteColor13"
          className={
            "w-7 h-7 rounded-full outline-none bg-paletteColor13 " +
            handleSelectedColor("paletteColor13")
          }
          onClick={handleChageCategoryColor}
        />
        <button
          type="button"
          id="paletteColor14"
          className={
            "w-7 h-7 rounded-full outline-none bg-paletteColor14 " +
            handleSelectedColor("paletteColor14")
          }
          onClick={handleChageCategoryColor}
        />
      </div>
    </div>
  );
}
