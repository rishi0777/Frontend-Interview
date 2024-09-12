import { useState } from "react";

export const SingleFilter = ({ name, subBrands }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [checkedSubBrands, setCheckedSubBrands] = useState([]);

  const handleOpenChange = () => {
    setIsOpen((prev) => !prev);
  };

  const handleBrandCheck = (e) => {
    e.stopPropagation();
    if (e.target.checked) {
      setCheckedSubBrands(subBrands.map((subBrand) => subBrand.name));
    } else {
      setCheckedSubBrands([]);
    }
  };

  const handleClick = (e) => {
    e.stopPropagation();
  };

  const handleSubBrandCheck = (e) => {
    const { name, checked } = e.target;
    setCheckedSubBrands((prev) => {
      if (checked) {
        return prev.concat(name);
      }
      return prev.filter((brand) => brand !== name);
    });
  };

  const isPartial =
    checkedSubBrands.length > 0
      ? checkedSubBrands.length < subBrands.length
      : false;

  const areAllBrandsSelected = checkedSubBrands.length === subBrands.length;

  return (
    <div onClick={handleOpenChange}>
      <input
        id={name}
        type="checkbox"
        checked={areAllBrandsSelected}
        onClick={handleClick}
        onChange={handleBrandCheck}
      />

      <label htmlFor={name} onClick={handleClick}>
        {name} {isPartial ? "Partially checked" : ""}
      </label>

      {isOpen && (
        <div style={{ paddingLeft: "1rem" }}>
          {subBrands.map((subBrand) => {
            const name = subBrand.name;
            return (
              <div key={name} onClick={handleClick}>
                <input
                  id={name}
                  name={name}
                  type="checkbox"
                  checked={!!checkedSubBrands.find((brand) => brand === name)}
                  onChange={handleSubBrandCheck}
                />

                <label htmlFor={name}>{name}</label>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
