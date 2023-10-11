import WorkCard from "./WorkCard";
import WorkPopup from "./WorkPopup";
import { useState } from "react";

const works = [
  {
    id: 0,
    title: "To-Do List",
    description:
      "This project allows users to create, edit, and remove tasks from their lists with ease. In addition, users can select and remove completed tasks with a single click, simplifying their workflow and helping them stay on top of their tasks.",
    tech_stack: ["HTML", "CSS", "JavaScript"],
    image: "https://lh3.googleusercontent.com/pw/ADCreHfecSxxc2tegEsQswoIgcHZxUT6lEl4O4neBANqSDY9oeHdZewy3c2Uf4MTZtvMx2GiDTpXii6BALgkiVucnonOSF-H3qKlILnjNSDL2MbdYMwK3fgVS8JMazGBhmXjeejRB6l7q_5I_6k32JCJAme8nBLB3kKXd0gZc1XYwQjbQD11jPUGNG8k0ZAW6Y_6KdX0xfmQZ5DLkMCB9DCV7fIQDqC-vPKt3t3dtuRPPJZ9OVOswVpEXUenqG-ahRBV9gUStNGvzEn-PT1ybqNuorAg_D7-n_YwokuN2mYgLbZRcu3iPH2Y_SaPzMlQi4NcqcvVIn36fxBbEo6ehRvLCNxXpcImHv70UYajItvrqFCusUR_jJtvLRURKe4caHgKw6hXdNRQKuLHIiusLVWXYOvn5GENtyQSj6O38bkpYbOA7bjwUQg1g8INf-VLvcfCMw_MIy1djqNCtco4vOkVhGbaT6k5nIjoFggyY2sCC9D9bHDVcOZMILulBZn5MrFzPfZy-LwJTwkjVUmvJYhabHpWqWZIckDjutL4R4Z8rMJ03j1H7Rx-CYf2trFZG_1IpxoW8Di9LkkhNO4S1ZOerwK1mDSAOXeR99ptH0zyN3dve3yv20vr-2eELYbreSaWfYPuznS0Q_Fa9Q06XSGWPZTgT0RftjdPRo2QWNTTSe4iv4-sr6N00pCW7zshQfL0PxLBVRolpPhLFY-8HD-dBiox-Il54iSmBrEEVkOO8OyYt569-Mo2moszFsZLJVGmFZmpamc2jby32ASknLPDdHooSRgXWmxtTG2ERY7VERlQY0S4uYKpAy3yEDhvgcn6G-MC3NVnqpN5x4cU5Aqb7YJd1FKl5ja1nNzLNfepD9vj6SnXe31sCEo957-_B2TmKkiM6Lq3jVYnr_22d6IJkjvk7osF3qQevpu7n5ACsX2dUL18M3SdaoBRX7Q7GP-zrfZZMbO8JX0H6sup55uIPHlI3VedZhc=w751-h705-s-no?authuser=0",
    live: "https://alejuda.github.io/TODO-List/dist/",
    source: "https://github.com/Alejuda/TODO-List",
  },
  {
    id: 1,
    title: "Luxury Speedsters",
    description:
      "The \"Luxury Speedsters\" app offers users a glimpse into the future of automotive luxury. It utilizes Ruby on Rails for a strong backend foundation and React for an easy-to-use frontend interface.",
    tech_stack: ["React", "Redux", "Ruby on Rails", "TailwindCSS", "PostgreSQL"],
    image: "https://lh3.googleusercontent.com/pw/ADCreHfp3lQAfiwVONstn9pHtCxLJmWd9_DD_szP4oHuSjw3WSerhzIgcTtBZbEabFm8k5FBQq6CXwuYckLHBUSZThhlSQwd3-L5B4_n7-VhvHRg3bZ6ZA7RZv8l2eNQmWMSRy9otg5ycO3R1eoshV9vayGIZpNE25LvsJ1U9yVRmI-V8oJAlW93j4lhdWhUeEHnvjEXIcjiWTllGFUwomUHUBY8Hfj6y4-Sxlf6uOyUyeLrT9zRsBzShyXiq8z3FHpPuajfp6K3LOvjdBUBlydPzcr3phZEInMoQVgNTG5_Hxp4a_FnMjbWCCG-V5TZL81mb8ZLdjzzLoyfP6sN6I_f5npTcd0FGpA47PJM5H7MsMoF3pPxgDG-1DEIDC_Z_5DcykdEHexWDUROeLgiZfsffHqKV2RJmTmwPlR_afTjE0XtQsvs36gqHaSxTP-5vlUCXPfK2nOeZcxuQW4iaV8w7kvXNZpCTeKo4fiJN1-Yw8y3xAEFTpAXPcDSBIypQjMHlqJBpKLs-DWlPXFPLp8onankxL2tznBcmlhY2WNQv6mif9Ig-snulrZ9EJf9JNxdzHGZBsO2O0MFYFrrmP6l2ZPbNts3bGppAKfPxv4AzRwDqenkd9b8A7aTi4tRbXBSvCeXc5fM94Io1wrjkbPASy0iX8mLJBzKJ5dx-XcSxir9eadkLPVooNM9cgtk-Qm-_CmnLdQiPSPYA21APELCwecEY-Jq7iwV98QM8gkEqBe8y_JY_g7WZDPVaMSSIhn7SxlzJy1ug_BWtMwZdcbVC3CWZkqsd-B-5FLCXo8dGomL9OP7Os-Lqc-_4Q5no8ofcqs2lCgk9UDqqSD9APrsJzK1b-ZglEXGqlRGESv047cRy11tGhPiJYD8il9WJn8hWVbMSnohVxUU9hEKvYIKvreTslBaJ_39_LvokC5ovGeZKP-2c91fFd2NQxVUHH2nMoYkgRikXNkzcpnLdk5g9r1A_4tqv6Y=w1280-h637-s-no?authuser=0",
    live: "https://rentals-app-egry.onrender.com/",
    source: "https://github.com/Luiscarlosvd/futuristic-transportation",
  },
  {
    id: 2,
    title: "CategorEASE",
    description:
      "CategorEASE is a comprehensive mobile web application designed to simplify expense tracking and budget management for individuals and households. It provides users with a user-friendly platform to efficiently categorize, monitor, and analyze their expenses, helping them make informed financial decisions.",
    tech_stack: ["Ruby", "Ruby on Rails","CSS","PostgreSQL"],
    image: "https://lh3.googleusercontent.com/pw/ADCreHeXFNdwFDz6zCFz-vAT1be06KaHir1tuUYqaYzyTTki44dKBWMGMyW0X-AfR5Vxh9lgw0ZVBYmqKMKJf2H1d4kjldmMHMEr43JhxxMb9gbQLP8m2jAKiAvz582CidDGLmuUlVxFGc6VGih5BFRhenO8bgt_OlUYKfzDEZdveWLxlvIVYGixgCjAvzJ5HutVQFd8pzgmhWzIx-1pSC0VdHg2Bw_fftLraOxeqi2NqhDfAqPkCuLl8Cxz7qYPa9weCY5XPc8hTxKvXPsoNO49pcbspPF2mOWPUNfM6p9YnCg0PkyzAZ8NFLKUs82XJAMVDzAtzcbeRN9Cl_QjN6Om2VdKA3OXh5TKNhWJ0VmpP_tLN0kgNzGFHswCqoJCbxzvA9Cz8V44YO2pg50UXSVo3OynEEUlUenFu0zPQFvhF1bBkUvSpGRq_Rs4dQr6J1faLeye-cPS8L8pp0JlzVZbKl_w8-z-WKXaB61Betd0QvfvbhT3kj1ON8luDP8kYflSQcA4fdKVTsF_9yIymr06JIwDMk_6zJvGhcPsu_fdHKxt8vxPRaTg8CKRSFDeH9n4FJwAjvx712C235NvcdVH4pDAWO753i0AePdhB_kGWbcb9olTSIoP7zyI-BzeZzYLrgkrRMNk74ESKuSZm9ZBLu9S-4f06Z2ZotG6OMK-XEfw13F-rmsV_7DYXFpIldqcCqU-R1oJ8EqNnVLXiDWy-mikPnkD9-sZZYD8j1OsFKKNqhyFjBRwWe-0n1VjpUAkAqOc4upQy2kLPjvq9AbZWPEW4FCBUf-t5kMm0U5GHX4HquC_NoKGZ5DZIhBPC4mcs9Ix3mDhmt907G15GlUfLzPBIQmoTAMXwf6bf57t5QsJmUyCW0oFwVDXIotFJmLyNXY6nhmAP-YIirYMIe33TnOVCqdffc5wZKNEPZqwBsD9MyPsz5skoxP-RKi9vyNjFkszU9Kd6qLvicq6fMWdlP85Ppmbxm4=w480-h860-s-no?authuser=0",
    live: "https://categorease.onrender.com/",
    source: "https://github.com/Alejuda/CategorEASE",
  },
  {
    id: 3,
    title: "Crypto Pro",
    description:
      "User-friendly web application designed to provide real-time data and basic information about various cryptocurrencies. By fetching data from an API, Crypto Pro displays a comprehensive list of cryptocurrencies, allowing users to explore and stay updated on the latest trends in the crypto market.",
    tech_stack: ["HTML", "CSS", "JavaScript"],
    image: "https://lh3.googleusercontent.com/pw/ADCreHdbsnFvV5K3fu308XN7TFMN4cLgBwFrJ4zTOXe2FqD0XG9yd9lGwwZlb-Venk3nsE8NV0DA41r4xbFkJQG_yT2FeL5kb8kH89ZT99zEmrj5lNWM7fnEGmo_u0alROKAxZ5e_Z8lFRymfE6oWfnTM8dAPhRJF3VEwUMrR4f6TaRF7Jo8FdFVG3bDbNnZqN-d8R1NEiZPggclIH6s3zFZjN0ZK2V8YzVUncCQJ6z0Y36gafo9pq54xi7XsWHqdbooY7_uIRtZf_j658pa_WPFxAPkOZgag30Sox8R0uRSWmBs2W9xSOpHQx6QgMON5WIHaq_ypKKNSifTEt7tPAUE5Qb1NiyazR0y1_amLHOvKDDlw2_7ZZH2FHPVxLoj8lt0kNWERuxw2WC84rV9Qa03oVIW8Zz1V_Pqim7t8PyH7assim-Nk-Z3wb4Jo-YBF6eEjhaSX_UAf2Dnft6JrJZYzzPRXVSzWm65aRmmkuKX3XrEoBDN6epC4MKLQxFO0JestuyYvGSMzx0ACg4MHc0iDekTvb_T-YoYXSGoQ277p0dsxSyQIDHOV2NgVbnR1Q5DnVaCAg6a1Y5Gfv4PnCR1N3G5DvdvcAC9kt3R_oSz2kKZUnIzh9KofGce5CQium6bgiozG9TG4sGEjS36m5OEyN1kSUeCHirV-tHlmJu9W0OdlwhONRHZCUrSQ8-DHUPPiNHblCwoFUXjCNZDzK8WEQIHqX-JrFCQriEmbRlIM1Vw9oT9XihRi08-WrLX9vg-z0qnxwmWU5qj_cNKjZ-K1xlK73HEF3q536Bb8h27D4GtHkswQ7ekiAt-nDEQetx3nSs8ybYrKbflHvbEt9cy1rErJualW7n6_2G3P9yZSaqfh7XIFwvUwkqO2Ttb1Sz7Gi6qJqMVfBkAT0FOx0fx5HYuCwu5Kk5s2Lrv2V-60E9znlXv6EZcXcVNr_-7QtXohE20ATXpVmX5ybwmYiEGBtmqMhkdJKk=w484-h867-s-no?authuser=0",
    live: "https://crypto-pro-umkp.onrender.com/",
    source: "https://github.com/Alejuda/crypto-pro",
  },
];

const RecentWorks = () => {
  const [popup, setPopup] = useState(false);
  const [popWork, setPopWork] = useState(0);

  return (
    <>
      <section className="w-screen recent-works-section px-8">
        <div className="max-w-screen-2xl pb-10 w-5/6 m-auto">
          <div className="flex gap-5 items-center">
            <h2 className="text-4xl whitespace-nowrap font-semibold py-10 fira-code">
              My recent works
            </h2>
            <div className="h-[1px] bg-white w-full" />
          </div>
          <div className="grid works-grid gap-10">
            {works.map((work) => (
              <WorkCard
                key={work.id}
                id={work.id}
                title={work.title}
                description={work.description}
                tech={work.tech_stack}
                image={work.image}
                setPopup={setPopup}
                setPopWork={setPopWork}
              />
            ))}
          </div>
        </div>
      </section>
      {popup && <WorkPopup popWork={works[popWork]} setPopup={setPopup} />}
    </>
  );
};

export default RecentWorks;
