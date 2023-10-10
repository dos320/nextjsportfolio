import utilStyles from "../styles/utils.module.css";
import projectCardStyles from "../styles/projectCard.module.css";
import Image from "next/image";
import { Link } from "react-scroll";

export default function ProjectCard({id, title, image, description, tags}){
    return(
        <div className={projectCardStyles.projectCard}>
            <div className={projectCardStyles.imageDiv}>
                <Image 
                    src={image}
                    height={120}
                    width={120}
                    className={projectCardStyles.imageContainer} 
                />
            </div>
            <div className={projectCardStyles.projectCardText}>
                <h2 className={`${utilStyles.heading2X1} ${utilStyles.marginleft1per} ${utilStyles.alignLeft}`}>title here {title}</h2>
                <p className={`${utilStyles.marginleft1per} ${utilStyles.alignLeft}`}>project card description here asdjaosdjoaisdjo asoidjioasjd asoidjioasdjiosadj asoidjioasjdioasdjiosa asdjioasdjioasjhfouaghfbaoi asodhoasdhouas {description}</p>
                <div className={projectCardStyles.bottomText}>
                    <p className={`${utilStyles.marginleft1per} ${utilStyles.marginbottom1per} ${utilStyles.alignLeft}`}>tags here asdjoaisdjoiasjdioasjdoiasdjioasdjioasjdoiasjiodjasiodj alfnaldkfjn poasdfj opiadjfiop {tags}</p>
                </div>
            </div>
            <br/>
        </div>
    )
}