export function AwardsWidget() {
  return (
    <div className="px-5 py-4 space-y-4">
      {[
        { title: "Gold Medal", desc: "Ranked 1st out of 1,500+ students in the Faculty of Engineering and Technology, University of Sindh." },
        { title: "Silver Medal", desc: "Ranked 1st in the Software Engineering Department, University of Sindh." },
        { title: "Prime Minister Laptop Award", desc: "Recipient of the Prime Minister Laptop Award during undergraduate studies." },
      ].map((award, i) => (
        <div key={i}>
          <div className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 bg-accent mt-2 shrink-0" />
            <div>
              <h3 className="text-sm font-semibold text-text-primary font-sans">{award.title}</h3>
              <p className="text-sm text-text-secondary mt-0.5 leading-relaxed">{award.desc}</p>
            </div>
          </div>
          {i < 2 && <div className="divider" />}
        </div>
      ))}
    </div>
  )
}
