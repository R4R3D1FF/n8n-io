"use client";
import Image from "next/image";

const icons = [
  "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f57a101c0f1368d96e0b4c_vector_Store_Pinecone_svg_53b9355d44.png",
  "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f4d7cc8fbc5fb41664b4ba_aggregate_svg_920d36c8b1.svg",
  "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f4d7cdc905e0766217414a_ai_Transform_svg_295de265a2.svg",
  "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f4d7cc51d72b9903df9fde_amqp_svg_ebc4c3b32a.svg",
  "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f4d7cc7710ca11e9ff79c3_affinity_svg_bfb77106bf.svg",
  "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f4d7cdeb6560b7c1ec0f6a_asana_svg_55712e4bc0.svg",
  "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f4d7ccbfc12ceb1fe6ae68_active_Campaign_svg_35c109a2eb.svg",
  "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66e3d729c77b48f5c03da73d_Group_2_58ad425d58.svg",
  "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f4d7cc7d05b082d9860095_Img_1_0efa51a03c.svg",
  "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66e3d729644e57ad4c4882db_d3bf3a_svg_679a3f62f0.svg",
  "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66e3d729fbb7d09521916b34_microsoft_Outlook_svg_baf4ee4ddf.svg",
  "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66e3d729485addcc28ecfa78_Icon_44e8e36907.svg",
  "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66e3d72d9607e61eeec9add2_bubble_svg_eb8418417c.svg",
  "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f57a101c0f1368d96e0b4c_vector_Store_Pinecone_svg_53b9355d44.png",
  "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f4d7cc8fbc5fb41664b4ba_aggregate_svg_920d36c8b1.svg",
  "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f4d7cdc905e0766217414a_ai_Transform_svg_295de265a2.svg",
  "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f4d7cc51d72b9903df9fde_amqp_svg_ebc4c3b32a.svg",
  "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f4d7cc7710ca11e9ff79c3_affinity_svg_bfb77106bf.svg",
  "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f4d7cdeb6560b7c1ec0f6a_asana_svg_55712e4bc0.svg",
  "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f4d7ccbfc12ceb1fe6ae68_active_Campaign_svg_35c109a2eb.svg",
  "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66e3d729c77b48f5c03da73d_Group_2_58ad425d58.svg",
  "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f4d7cc7d05b082d9860095_Img_1_0efa51a03c.svg",
  "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66e3d729644e57ad4c4882db_d3bf3a_svg_679a3f62f0.svg",
  "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66e3d729fbb7d09521916b34_microsoft_Outlook_svg_baf4ee4ddf.svg",
  "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66e3d729485addcc28ecfa78_Icon_44e8e36907.svg",
  "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66e3d72d9607e61eeec9add2_bubble_svg_eb8418417c.svg",


  // add as many as you need
];

export default function IconMarquee() {
  return (
    <div className="w-[95vw] overflow-hidden ">
      <div className="w-[200%] overflow-hidden flex flex-row items-center whitespace-nowrap marquee-content">
        {icons.map((src, i) => (
          <div
            key={i}
            className="p-2 h-23 w-23 flex items-center justify-center"
          >
            <div
              className="flex-none rounded-lg h-18 w-18 bg-[#eaeaec] hover:bg-gradient-to-b hover:from-stone-300 hover:to-stone-600 hover:h-20 hover:w-20 flex items-center justify-center transition duration-300 ease-in-out transform"
            >
              <img src={src} alt="" width={45} height={45} />
            </div>
          </div>
        ))}
      </div>

      <div className="w-[200%] overflow-hidden flex flex-row items-center whitespace-nowrap marquee-content-reverse">
        {icons.map((src, i) => (
          <div
            key={i}
            className="p-2 h-23 w-23 flex items-center justify-center"
          >
            <div
              className="flex-none rounded-lg h-18 w-18 bg-[#eaeaec] hover:bg-gradient-to-b hover:from-stone-300 hover:to-stone-600 hover:h-20 hover:w-20 flex items-center justify-center"
            >
              <img src={src} alt="" width={45} height={45} />
            </div>
          </div>
        ))}
      </div>

      <div className="flex md:hidden w-[200%] overflow-hidden flex flex-row items-center whitespace-nowrap marquee-content-reverse">
        {icons.map((src, i) => (
          <div
            key={i}
            className="p-2 h-23 w-23 flex items-center justify-center"
          >
            <div
              className="flex-none rounded-lg h-18 w-18 bg-[#eaeaec] hover:bg-gradient-to-b hover:from-stone-300 hover:to-stone-600 hover:h-20 hover:w-20 flex items-center justify-center"
            >
              <img src={src} alt="" width={45} height={45} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}