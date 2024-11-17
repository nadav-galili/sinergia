import { ChevronsLeft, Trophy } from "lucide-react";
import Link from "next/link";
type SuccessStory = {
  title: string;
  client: string;
  description: string;
  achievements: string[];
};

const successStories: SuccessStory[] = [
  {
    title: "רשת סופרמרקטים ארצית",
    client: "RetailCo Inc.",
    description: "אתגר:שיפור הרווחיות ב25% תוך שנה",
    achievements: [
      "ניתוח מעמיק של נתוני מכירות",
      "יישום אסטרטגיית תמחור חדשה",
      "אוםטימזציה של מלאי",
      "תוצאה:עלייה של 32% ברווחיות ",
    ],
  },
  {
    title: "רשת סופרמרקטים ארצית",
    client: "RetailCo Inc.",
    description: "אתגר:שיפור הרווחיות ב25% תוך שנה",
    achievements: [
      "ניתוח מעמיק של נתוני מכירות",
      "יישום אסטרטגיית תמחור חדשה",
      "אוםטימזציה של מלאי",
      "תוצאה:עלייה של 32% ברווחיות ",
    ],
  },
  {
    title: "רשת סופרמרקטים ארצית",
    client: "RetailCo Inc.",
    description: "אתגר:שיפור הרווחיות ב25% תוך שנה",
    achievements: [
      "ניתוח מעמיק של נתוני מכירות",
      "יישום אסטרטגיית תמחור חדשה",
      "אוםטימזציה של מלאי",
      "תוצאה:עלייה של 32% ברווחיות ",
    ],
  },
];

const Projects = () => {
  return (
    <section className="container mx-auto">
      <Link href="/projects" className="block">
        <h2 className="heading text-center mx-auto rounded-lg  flex items-center gap-2 justify-center">
          פרוייקטים לדוגמה <ChevronsLeft className="size-8 " />
        </h2>
      </Link>
      <h3 className="text-2xl  !text-primary container mx-auto  py-3 rounded-lg underline text-center mb-5 ">
        ההצלחות שלנו
      </h3>

      <div className="grid md:grid-cols-3 gap-5">
        {successStories.map((story, index) => (
          <div
            key={index}
            className="bg-white text-center rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            tabIndex={0}
            role="article"
            aria-label={`Success story: ${story.title}`}>
            <h3 className="text-2xl text-primary font-semibold mb-2">
              {story.title}
            </h3>
            {/* <p className="text-gray-600 font-medium mb-4">{story.client}</p> */}
            <p className="text-black-100 mb-6">{story.description}</p>

            {/* <h4 className="font-semibold mb-3">Key Achievements:</h4> */}
            <ul className="space-y-2 ">
              {story.achievements.map((achievement, i) => (
                <li key={i} className="flex text-center items-center ">
                  <Trophy className="w-5 h-5 mx-2 text-success" />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
