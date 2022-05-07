import React, { useEffect, useState } from "react";
import axios from "../../axios";
//style
import styles from "./Categories.module.css";

export default function Categories() {
  const [allCategories, setAllCategories] = useState([]);

  const catrequests = `/categories?_fields=id, link, name, slug, acf`;

  useEffect(() => {
    const fetchCategories = async () => {
      const catrequest = await axios.get(catrequests);

      console.log(catrequest.data);
      setAllCategories(catrequest.data);
      console.log(allCategories);
    };
    fetchCategories();
  }, [catrequests]);

  return (
    <div className={styles.categoriesParent}>
      {allCategories.map((category) => (
        <div className={styles.categories}>
          <h5>{category.name}</h5>
        </div>
      ))}
    </div>
  );
}
