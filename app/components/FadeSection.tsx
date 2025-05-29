import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll"; // adjust path as needed
import '../home.css'

function FadeSection(props: React.ComponentProps<"section">) {
  const [ref, visible] = useFadeInOnScroll();
  const mergedClassName = `section-fade${visible ? " is-visible" : ""} ${props.className ?? ""}`;
  console.log('FadeSection', { visible, className: mergedClassName });
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