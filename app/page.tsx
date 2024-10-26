
type variant = "neutral" | "error" | "warning" | "success" | "brand";
const variants: variant[] = ["neutral", "error", "warning", "success", "brand"];
type size = "small" | "medium" | "large";
const sizes: size[] = ["small", "medium", "large"];

const sizeContainerTranslator = (size: size) => {
  switch (size) {
    case "small":
      return 'h-5 px-1.5 py-0.5';
    case "medium":
      return 'h-6 px-2 py-0.5'
    case "large":
    default:
      return 'h-7 px-2.5 py-1';
  }
}

const variantContainerTranslator = (variant: variant) => {
  switch (variant) {
    case "error":
      return 'bg-red-50 border-red-200';
    case "warning":
      return 'bg-amber-50 border-amber-200';
    case "success":
      return 'bg-green-50 border-green-200';
    case "brand":
      return 'bg-indigo-50 border-indigo-200';
    case "neutral":
    default:
      return 'bg-gray-50 border-neutral-200';
  }
}

const variantTextTranslator = (variant: variant) => {
  switch (variant) {
    case "error":
      return 'text-red-600';
    case "warning":
      return 'text-amber-700';
    case "success":
      return 'text-green-700';
    case "brand":
      return 'text-indigo-700';
    case "neutral":
    default:
      return 'text-neutral-600';
  }
}

const sizeTextTranslator = (size: size) => {
  switch (size) {
    case "small":
      return 'text-xs leading-none';
    case "medium":
    case "large":
    default:
      return 'text-sm leading-tight';
  }
}


function Badge({ variant, size }: { variant: variant, size: size }) {
  return (
    <div className={`${sizeContainerTranslator(size)} ${variantContainerTranslator(variant)} rounded-full border justify-start items-center`}>
      <div className={`${variantTextTranslator(variant)} ${sizeTextTranslator(size)} text-center  font-normal`}>Label</div>
    </div>
  )
}


export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <section className="w-60 h-[236px] justify-start items-center gap-6 flex grid grid-cols-3 gap-4">{variants.map((variant) => {
        return (
          sizes.map((size) => {
            return (
              <div key={variant + size} className="w-60 justify-start items-center gap-6 inline-flex">
                <Badge variant={variant} size={size} />
              </div>
            )
          })
        )
      })}
      </section>
    </main>
  );
}
