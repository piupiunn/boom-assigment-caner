import React, { useEffect, useState } from "react";
import axios from "../../axios";
//style
import styles from "./Card.module.css";

export default function Card() {
  const [allData, setAllData] = useState([]);

  const requests = `/posts?_embedded['wp:featuredmedia']['0'].source_url & _fields=id, slug, link, title, excerpt.rendered, featured_media, img_url`;

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests);

      console.log(request.data);
      setAllData(request.data);
      console.log(allData);
    };
    fetchData();
  }, [requests]);

  return (
    <div className={styles.cardparent}>
      {allData.map((data) => (
        <div className={styles.cardbox} id={data.id}>
          {/**ilk başta img_url değeri geliyordu ama sonradan false'a döndü. ben de img kutusuna yükseklik-genişlik-border verip bıraktım. */}
          <div className={styles.cardimg}>
            <img src={`${data.img_url}`} alt="*" />
          </div>

          <div className={styles.titledetails}>
            <h3>
              {/**galiba fontlardan kaynaklı bir hata olarak api'den bazı imla işaretleri yerine "&#8217;" "&#8217;" "&#8220;" gibi yazım hataları geliyordu. replace metoduyla gelen yazım hatalarını düzeltip, doğrularını yerleştirdim. Ayrıca gelen api'de açıklama kısmında başta ve sonda <p></p> etiketleri gözüküyordu. Onları da replace yöntemiyle kaldırdım. */}

              {data.title.rendered
                .replace("&#8217;", "'")
                .replace("&#8221;", "'")
                .replace("&#8220;", "")}
            </h3>
            {/**eğer apiden 100 karakterden fazla bir paragraf gelirse, substring metoduyla 100. karakterden sonra ... gösterilmesini sağladım. Bu ilerde api kaynaklı oluşabilecek potansiyel bir görsel hatanın da önüne geçecektir. */}
            <p>
              {data.excerpt.rendered
                .replace("&#8217;", "'")
                .replace("&#8221;", "'")
                .replace("&#8220;", "")
                .replace("<p>", "")
                .replace("</p>", "")}
            </p>
          </div>
          <div className="bottom-side"></div>
        </div>
      ))}
    </div>
  );
}
