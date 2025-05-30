import style from './experience.module.css'
const ExperienceForm = ({
    designation,
    imageSrc,
    description
}: {
    designation: string;
    imageSrc: string;
    description: string[];
}): JSX.Element => {
    return (
        <div className={style.flipCard}>
            <div className={style.flipCardInner}>
                <div className={style.flipCardFront}>
                    <div className={style.logoDiv}>
                    <img src={imageSrc} alt="Avatar" className={style.flipCardImage} />
                    </div>
                    <p className={style.designation}>{designation}</p>
                    <p className={style.arrowIcon}>-&gt;</p>
                </div>
                <div className={style.flipCardBack}>
                    <ul className={style.flipCardJobTitle}>
                        {description.map((text) => {
                            return <li className={style.flipCardJobTitleItem} key={text}>{text}</li>
                        })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ExperienceForm;