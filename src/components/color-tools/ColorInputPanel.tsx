type ColorInputPanelProps = {
  title: string;
  description?: string;
  foregroundColor: string;
  backgroundColor: string;
  foregroundInputValue?: string;
  backgroundInputValue?: string;
  foregroundPreviewColor?: string;
  backgroundPreviewColor?: string;
  foregroundLabel?: string;
  backgroundLabel?: string;
  helperText?: string;
  onForegroundChange?: (value: string) => void;
  onBackgroundChange?: (value: string) => void;
};

function ColorField({
  label,
  inputValue,
  previewColor,
  onChange,
}: {
  label: string;
  inputValue: string;
  previewColor: string;
  onChange?: (value: string) => void;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white/90 p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900/70">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">{label}</label>
      <div className="mt-3 flex items-center gap-3">
        <input
          type="color"
          value={previewColor}
          onChange={(event) => onChange?.(event.target.value)}
          disabled={!onChange}
          className="h-12 w-16 cursor-pointer rounded-xl border border-gray-200 bg-transparent p-1 disabled:cursor-default dark:border-gray-700"
          aria-label={label}
        />
        <input
          type="text"
          value={inputValue}
          onChange={(event) => onChange?.(event.target.value)}
          readOnly={!onChange}
          className="h-12 flex-1 rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm font-medium tracking-wide text-gray-900 outline-none transition focus:border-blue-400 focus:bg-white dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-blue-500 dark:focus:bg-gray-900"
          spellCheck={false}
        />
      </div>
    </div>
  );
}

export default function ColorInputPanel({
  title,
  description,
  foregroundColor,
  backgroundColor,
  foregroundInputValue,
  backgroundInputValue,
  foregroundPreviewColor,
  backgroundPreviewColor,
  foregroundLabel = 'Foreground',
  backgroundLabel = 'Background',
  helperText,
  onForegroundChange,
  onBackgroundChange,
}: ColorInputPanelProps) {
  return (
    <section className="rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 shadow-lg shadow-gray-200/60 dark:border-gray-700 dark:from-gray-900 dark:to-gray-800 dark:shadow-none">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-300">Color Roles</p>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
        {description ? <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">{description}</p> : null}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <ColorField
          label={foregroundLabel}
          inputValue={foregroundInputValue ?? foregroundColor}
          previewColor={foregroundPreviewColor ?? foregroundColor}
          onChange={onForegroundChange}
        />
        <ColorField
          label={backgroundLabel}
          inputValue={backgroundInputValue ?? backgroundColor}
          previewColor={backgroundPreviewColor ?? backgroundColor}
          onChange={onBackgroundChange}
        />
      </div>

      {helperText ? <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">{helperText}</p> : null}
    </section>
  );
}
