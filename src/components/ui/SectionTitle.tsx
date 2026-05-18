interface SectionTitleProps {
  title: string;
  subtitle?: string;
  id?: string;
}

export function SectionTitle({ title, subtitle, id }: SectionTitleProps) {
  return (
    <div className="text-center mb-16" id={id}>
      <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mb-4">
        {title}
        <span className="gradient-text">.</span>
      </h2>
      {subtitle && (
        <p className="text-text-secondary max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="w-16 h-1 bg-primary mx-auto mt-6 rounded-full" />
    </div>
  );
}
