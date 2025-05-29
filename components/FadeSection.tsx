import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";
import '@/styles/home.css'

function FadeSection(props: React.ComponentProps<"section">) {
  const [ref, visible] = useFadeInOnScroll();
  const mergedClassName = `section-fade${visible ? " is-visible" : ""} ${props.className ?? ""}`;
  return (
    <section
      ref={ref}
      {...props}
      className={mergedClassName}
    >
      {props.children}
    </section>
  );
}

export default FadeSection;