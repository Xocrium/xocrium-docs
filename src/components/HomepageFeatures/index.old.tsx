import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Translate, { translate } from "@docusaurus/Translate";
import { JSXSource } from "react/jsx-dev-runtime";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: translate({
      id: "homepage.text-1.title",
      message: "Simple Yet Innovative",
    }),
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <Translate id="homepage.text-1.description">
        Kvexium offers a clear and intuitive syntax. It combines innovation and
        simplicity, making coding easy while enhancing readability.
      </Translate>
    ),
  },
  {
    title: translate({
      id: "homepage.text-2.title",
      message: "User-Friendly Documentation",
    }),
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <Translate id="homepage.text-2.description">
        The Kvexium documentation is straightforward and accessible, providing
        essential details about the language and libraries, all in one place.
      </Translate>
    ),
  },
  {
    title: translate({
      id: "homepage.text-3.title",
      message: "Community-Driven",
    }),
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <Translate id="homepage.text-3.description">
        Kvexium encourages users to create libraries. Community contributions
        shape the language, keeping it adaptable and vibrant.
      </Translate>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
