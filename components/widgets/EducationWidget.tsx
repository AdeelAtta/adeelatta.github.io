export function EducationWidget() {
  return (
    <div className="px-5 py-4 space-y-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-sm font-semibold text-text-primary font-sans">B.S. Software Engineering</h3>
          <p className="text-xs text-accent font-medium mt-0.5 font-sans">University of Sindh, Jamshoro</p>
        </div>
        <span className="text-[11px] text-text-muted shrink-0 font-sans">Jan 2020 – May 2024</span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        <span className="tag">CGPA: 3.71 / 4.00</span>
      </div>
      <div>
        <p className="section-label mb-2">Relevant Coursework</p>
        <p className="text-sm text-text-secondary leading-relaxed">
          Data Science, Computer Communication & Networks, Pervasive Computing, Operating Systems,
          Microprocessor & Assembly Language, Digital Logic Design, Data Structures & Algorithms,
          Linear Algebra, Probability & Statistics, Calculus
        </p>
      </div>
    </div>
  )
}
