import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Start from scratch',
    Svg: require('@site/static/img/undraw_web_development_0l6v.svg').default,
    description: (
      <>
        No prior web development experience is needed. We'll cover HTML and CSS from the ground up, giving you a solid foundation. Understanding of JavaScript is useful but not required. Whether you're a complete beginner or brushing up on skills, this course will guide you.
      </>
    ),
  },
  {
    title: 'Hands-on Learning',
    Svg: require('@site/static/img/undraw_programming_re_kg9v.svg').default,
    description: (
      <>
        Hands-On Learning Build projects that matter! Throughout the course, you'll create real-world applications like a portfolio website and a dynamic to-do list, enhancing your skills in HTML, CSS, JavaScript, and React.
      </>
    ),
  },
  {
    title: 'React for Dynamic Interfaces',
    Svg: require('@site/static/img/undraw_react_re_g3ui.svg').default,
    description: (
      <>
        React makes building complex user interfaces easier. Through step-by-step lessons, you’ll learn how to manage components, state, and props, building highly interactive and engaging web applications.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
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
