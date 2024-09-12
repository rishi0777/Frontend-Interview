import { useState } from "react";
import { MOCK_FILTER_DATA } from "./mockFilterData";

export const BrandFilter = ({
  parentFilter,
  filterData,
  check,
  setCheck,
  ...props
}) => {
  const isNested = !!filterData?.children;
  const [showNestedFilters, setShowNestedFilters] = useState(false);
  const [isAllSelected, setIsAllSelected] = useState(false);
  const [isPartial, setIsPartial] = useState(false);

  const addNestedChecks = (parent, obj, newMp, value) => {
    newMp.set(obj.name, { parent, value });

    (obj?.children || []).forEach((filter) =>
      addNestedChecks(obj.name, filter, newMp, value)
    );
    return newMp;
  };

  // const calculateLength = (parent) => {
  //   let len = (parent.children || []).length;
  //   (parent.children || []).forEach((child) => (len += calculateLength(child)));
  //   return len;
  // };

  // const removeAddParentChecks = (parent, newMp) => {
  //   if (!parent) return;
  //   const fullLength = calculateLength(
  //     MOCK_FILTER_DATA.filter((flt) => flt.name === parent)?.[0] || []
  //   );

  //   let selectedLength = 0;
  //   for (let [key, value] of newMp.entries()) {
  //     if (value.parent === parent && value.value === true) {
  //       selectedLength += 1;
  //     }
  //   }

  //   console.log(fullLength, selectedLength);
  //   newMp.set(parent, {
  //     ...newMp.get(parent),
  //     value: selectedLength === fullLength,
  //   });

  //   removeAddParentChecks(newMp.get(parent).parent, newMp);
  // };

  const computeSelected = (newMp) => {
    let selectedLength = 0;
    for (let [key, value] of newMp.entries()) {
      if (value.parent === parentFilter && value.value === true) {
        selectedLength += 1;
      }
    }

    const totalLength = filterData?.children?.length || 0;
    console.log(totalLength, selectedLength);
    return {
      isPartial: selectedLength >= 1 && selectedLength < totalLength,
      isAllSelected: selectedLength === totalLength,
    };
  };

  const handleChange = (name) => {
    setCheck((mp) => {
      let newMp = new Map(mp);

      if (newMp.has(name)) {
        newMp.set(name, {
          ...newMp.get(name),
          value: !newMp.get(name).value,
          child: newMp.get(name).child + 1,
        });
      } else {
        newMp.set(name, { parent: parentFilter, value: true, child: 1 });
      }

      (filterData?.children || []).forEach((filter) =>
        addNestedChecks(name, filter, newMp, newMp.get(name).value)
      );

      // removeAddParentChecks(newMp.get(name).parent, newMp);
      const { isAllSelected, isPartial } = computeSelected(newMp);
      setIsAllSelected(isAllSelected);
      setIsPartial(isPartial);

      return newMp;
    });
  };

  return (
    <div {...props}>
      {isNested ? (
        <div>
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            style={{ display: "flex", gap: "0.3rem" }}
          >
            <input
              type="checkbox"
              name={filterData.name}
              checked={
                check.has(filterData.name)
                  ? check.get(filterData.name).value
                  : false
              }
              onChange={() => handleChange(filterData.name)}
            />
            <label htmlFor={filterData.name}>{filterData.name}</label>
            {isPartial && (
              <label htmlFor={"partial"}> Partially Selected</label>
            )}

            <div
              style={{ cursor: "pointer" }}
              onClick={() => setShowNestedFilters((prev) => !prev)}
            >
              {!showNestedFilters ? <>🔺</> : <>🔻</>}
            </div>
          </div>

          {showNestedFilters &&
            filterData.children.map((filter, idx) => {
              return (
                <BrandFilter
                  key={`filter-${idx}`}
                  parentFilter={filterData.name}
                  filterData={filter}
                  check={check}
                  setCheck={setCheck}
                  style={{ marginLeft: "10px" }}
                />
              );
            })}
        </div>
      ) : (
        <div>
          <input
            type="checkbox"
            name={filterData.name}
            checked={
              check.has(filterData.name)
                ? check.get(filterData.name).value
                : false
            }
            onChange={() => handleChange(filterData.name)}
          />
          <label htmlFor={filterData.name}>{filterData.name}</label>
        </div>
      )}
    </div>
  );
};
