import { useTranslation } from "react-i18next"
import image from "../assets/images/courses-hero.png"
// components
import { Hero } from "../components/Hero";
import WhySoftclub from "../components/WhySoftclub";
import AllCourses from "../components/AllCourses";
import Form from "../components/Form";
import Teachers from "../components/Teachers";
import Certificate from "../components/Certificate";
import { Companies } from "../components/Companies";
// images
import formBackground from "../assets/images/form-background.png"
AllCourses
const Courses = () => {
  const {t} = useTranslation()
  return (
    <div className="courses">
      {/*Hero*/}
      <Hero
        routename={t("courses.hero.route-name")}
        name={t("courses.hero.name")}
        description={t("courses.hero.description")}
        button={t("courses.hero.button")}
        image={image}
        contentClass="contentClass"
      />
      {/*Why Softclub*/}
      <WhySoftclub
        header={t("courses.why-softclub.heading")}
        list={t("courses.why-softclub.list", { returnObjects: true })}
      />
      {/*All Courses*/}
      <AllCourses description={true} />
      {/*Form*/}
      <Form
        formfooter={t("form.footer", { returnObjects: true })}
        background={formBackground}
      />
      {/*Teachers*/}
      <Teachers />
      {/*Certificate*/}
      <Certificate />
      {/*Companies*/}
      <Companies />
    </div>
  )
}
export default Courses