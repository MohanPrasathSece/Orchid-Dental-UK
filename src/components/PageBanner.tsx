import FadeInView from "@/components/FadeInView";

interface PageBannerProps {
  image: string;
  title: string;
  subtitle?: string;
  badge?: string;
}

const PageBanner = ({ image, title, subtitle, badge }: PageBannerProps) => (
  <section className="relative h-[280px] lg:h-[360px] overflow-hidden">
    <img
      src={image}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-foreground/60" />
    <div className="relative h-full flex items-center justify-center text-center px-6">
      <FadeInView>
        <div>
          {badge && (
            <p className="text-sm font-semibold text-primary-foreground/80 uppercase tracking-wider mb-3">
              {badge}
            </p>
          )}
          <h1 className="text-3xl lg:text-5xl font-extrabold text-primary-foreground mb-3">
            {title}
          </h1>
          {subtitle && (
            <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </FadeInView>
    </div>
  </section>
);

export default PageBanner;
