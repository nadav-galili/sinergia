import { ChevronsLeft, Trophy } from "lucide-react";
import Link from "next/link";
import Header from "./Header";
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

const Projects = ({ icon }: { icon: string }) => {
  return (
    <section className="container mx-auto mt-10 pt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {successStories.map((story, index) => (
          <div
            key={index}
            className="bg-gray-300 text-center rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
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
