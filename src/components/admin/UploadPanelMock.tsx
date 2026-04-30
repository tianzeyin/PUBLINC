const uploadTypes = ["Book text/content files", "Audio files", "Subtitle files", "Cover images", "PDF / Word / Excel / ZIP files"];

export default function UploadPanelMock() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-extrabold text-slate-900">Upload Resources</h3>
      <p className="mt-1 text-sm font-medium text-slate-500">
        Supported file formats: PDF, DOCX, XLSX, TXT, MP3, WAV, SRT, VTT, JPG, PNG, ZIP
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {uploadTypes.map((type) => (
          <div key={type} className="flex min-h-32 flex-col items-center justify-center rounded-2xl border border-dashed border-blue-200 bg-blue-50/60 p-4 text-center">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-xs font-extrabold text-blue-700 shadow-sm">UP</div>
            <p className="text-sm font-bold text-slate-800">{type}</p>
            <button type="button" className="mt-3 rounded-lg bg-white px-3 py-1.5 text-xs font-bold text-blue-700 shadow-sm">Upload</button>
          </div>
        ))}
      </div>
    </section>
  );
}
