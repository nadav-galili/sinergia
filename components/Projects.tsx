import { Trophy } from "lucide-react";
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
    description:
      "ניתוח אסטרטגי של הרשת, אפיון חוזקות וחולשות והמלצה למיקוד ביעדים אסטרטגיים",
    achievements: [
      "ניתוח אסטרטגי של הרשת, אפיון חוזקות וחולשות והמלצה למיקוד ביעדים אסטרטגיים",
      " הכנת תוכנית עבודה עם יעדים ומדדים",
      "הדרכה של מנהלי אזורים וסניפים",
      "  עריכת ספר הנהלים של הרשת , הכנת לומדות באנימציה לבעלי תפקידים בסניף- קופאיות , מחסנאים , מנהלי אולם , סדרנים ועוד",
    ],
  },
  {
    title: "מנהלי קטגוריות וטרייד של ספק מוביל",
    client: "RetailCo Inc.",
    description: "פיתוח תוכנית הדרכה למערך מנהלי הקטגוריות",
    achievements: [
      "פיתוח תוכנית הדרכה למנהלי הטרייד מרקטינג",
      "פיתוח תוכנית הדרכה למערך מנהלי הקטגוריות",
    ],
  },
  {
    title: "תוכנית אסטרטגיה ליצרן מזון",
    client: "RetailCo Inc.",
    description: " פיתוח תוכנית אסטרטגית ליצרן",
    achievements: [
      "פיתוח תוכנית אסטרטגית ליצרן",
      "פיתוח תוכנית לשדרוג תהליכי:שיווק, תמחור , ערוצי הפצה, מכירות ועוד",
    ],
  },
];

const Projects = ({ icon }: { icon: string }) => {
  return (
    <section className="container mx-auto my-10 pt-10">
      <Link href="/services" className="main__heading">
        <Header headerText="סיפורי הצלחה" icon={icon} />
      </Link>
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
            {/* <p className="text-black-100">{story.description}</p> */}

            {/* <h4 className="font-semibold mb-3">Key Achievements:</h4> */}
            <ul className="space-y-2 mt-4">
              {story.achievements.map((achievement, i) => (
                <li key={i} className="flex text-right items-start ">
                  <Trophy
                    width={20}
                    height={20}
                    className="mx-2 text-success flex-shrink-0"
                  />
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
