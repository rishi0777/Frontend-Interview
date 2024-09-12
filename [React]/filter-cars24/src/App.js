import { useState } from "react";
import Filter from "./components/Filter";
import Folder from "./components/Folder";
import { BrandFilter } from "./components/RecurBrandFilter";
import { MOCK_FILTER_DATA } from "./components/RecurBrandFilter/mockFilterData";
import { MOCK_FOLDER_DATA } from "./components/Folder/mockFolderData";
import { SingleFilter } from "./components/SingleFilter";

export default function App() {
  // useEffect(() => {
  //   const getBrands = async () => {
  //     //   const response = await fetch(
  //     //     "https://mocki.io/v1/6ef7ace1-0989-4b62-bb24-41ae229f9e5e"
  //     //   );
  //     //   const data = await response.json();
  //     setBrands(MOCK_FILTER_DATA);
  //   };

  //   getBrands();
  // }, []);

  // const [brandFilter, setBrandFilter] = useState(new Map());
  return (
    <>
      {/* {MOCK_FILTER_DATA.map((filterData, idx) => (
        <SingleFilter
          key={`brand-filters-${idx}`}
          name={filterData.name}
          subBrands={filterData.children}
        />
      ))} */}

      {MOCK_FILTER_DATA.map((filterData, idx) => (
        <Filter key={`brand-filter-${idx}`} filterData={filterData} />
      ))}
    </>
  );
}
