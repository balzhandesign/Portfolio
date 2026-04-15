import { profile } from "@/data/cases";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-sm text-muted font-light mb-6">Контакты</p>
        <h2 className="text-3xl md:text-5xl mb-12 max-w-md leading-tight">
          <span className="font-bold">Открыта</span> <span className="font-light">к новым возможностям</span>
        </h2>

        <a
          href={`https://t.me/${profile.contacts.telegram.replace("@", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm font-medium bg-accent text-white px-6 py-3 rounded-full hover:bg-accent/85 transition-colors mb-12"
        >
          Написать в Telegram
        </a>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Telegram", value: profile.contacts.telegram, href: `https://t.me/${profile.contacts.telegram.replace("@", "")}` },
            { label: "LinkedIn", value: profile.contacts.linkedin, href: `https://linkedin.com/in/${profile.contacts.linkedin.replace("@", "")}` },
            { label: "Телефон", value: profile.contacts.phone, href: `tel:${profile.contacts.phone.replace(/\s/g, "")}` },
            { label: "Локация", value: profile.location, href: "" },
          ].map((item) => (
            <div key={item.label}>
              <span className="text-xs text-muted font-light block mb-1">{item.label}</span>
              {item.href ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-accent transition-colors">
                  {item.value}
                </a>
              ) : (
                <span className="text-sm font-medium">{item.value}</span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 pt-6 border-t border-border flex justify-between text-xs text-muted font-light">
          <span>{new Date().getFullYear()} {profile.name}</span>
          <span>Product Designer</span>
        </div>
      </div>
    </footer>
  );
}
