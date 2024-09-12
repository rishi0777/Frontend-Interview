import React, { Fragment, useState } from "react";

const Filter = ({ filterData }) => {
  const { name, children: subBrands } = filterData;
  const [showSubBrands, setShowSubBrands] = useState(false);
  const [subBrandCheck, setSubBrandCheck] = useState(new Map());

  const handleFilterChange = (checked) => {
    setSubBrandCheck(() => {
      const mp = new Map();
      (subBrands || []).forEach((sub) => mp.set(sub.name, checked));
      return mp;
    });
  };

  const handleSubBrandFilterChange = (subName) => {
    setSubBrandCheck((prevMp) => {
      const mp = new Map(prevMp);
      if (mp.has(subName)) {
        mp.set(subName, !mp.get(subName));
      } else {
        mp.set(subName, true);
      }
      return mp;
    });
  };

  const computeStatus = () => {
    let checked = 0;
    for (let [key, value] of subBrandCheck.entries()) {
      if (value) checked += 1;
    }

    return {
      isAllChecked: checked === (subBrands || []).length,
      isPartiallyChecked: checked >= 1 && checked < (subBrands || []).length,
    };
  };

  const { isAllChecked, isPartiallyChecked } = computeStatus();

  return (
    <div>
      <div style={{ display: "flex" }}>
        <input
          type="checkbox"
          id={name}
          name={name}
          checked={isAllChecked}
          onChange={(e) => handleFilterChange(e.target.checked)}
        />
        <label htmlFor={name} onClick={() => handleFilterChange(isAllChecked)}>
          {name}
          {isPartiallyChecked && (
            <span style={{ marginLeft: "4px" }}>(Partially Checked)</span>
          )}
        </label>

        <div
          style={{ cursor: "pointer" }}
          onClick={() => setShowSubBrands((prev) => !prev)}
        >
          {!showSubBrands ? <>🔺</> : <>🔻</>}
        </div>
      </div>

      {showSubBrands && (
        <div style={{ marginLeft: "10px" }}>
          {(subBrands || []).map((sub, idx) => {
            return (
              <div key={`sub-${idx}`}>
                <input
                  type="checkbox"
                  name={sub.name}
                  checked={
                    subBrandCheck.has(sub.name)
                      ? subBrandCheck.get(sub.name)
                      : false
                  }
                  onChange={() => handleSubBrandFilterChange(sub.name)}
                />
                <label
                  htmlFor={sub.name}
                  onClick={() => handleSubBrandFilterChange(sub.name)}
                >
                  {sub.name}
                </label>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Filter;
