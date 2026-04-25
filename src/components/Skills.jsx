import { Icon } from '@iconify/react'

// Icon mapping for known technologies
const ICON_MAP = {
  // Cross-platform
  'React Native':      'logos:react',
  'DRN (Didi RN)':     'logos:react',
  'Hummer':            null,
  'JSBridge':          'logos:javascript',

  // Mobile
  'Android (Java/Kotlin)': 'logos:android-icon',
  'iOS (OC/Swift)':        'logos:swift',
  'HarmonyOS':             null,

  // Frontend
  'React':       'logos:react',
  'TypeScript':  'logos:typescript-icon',
  'JavaScript':  'logos:javascript',
  'HTML5':       'logos:html-5',
  'CSS3':        'logos:css-3',

  // Stability
  'Crash 治理':  null,
  '卡顿治理':    null,
  '白屏监控':    null,
  'JS 异常':     'logos:javascript',
  'APM':         null,
  'Crash':       null,
  'ANR':         null,
  'White Screen': null,
  'JS Exception': 'logos:javascript',

  // Engineering
  'CI/CD':       'logos:github-actions',
  'Code Review': 'logos:github-icon',
  'AI CR':       null,
  '自动化插桩':  null,
  'Automation':  null,

  // AI
  'DeepSeek':   null,
  'OpenAI':     'simple-icons:openai',
  'Claude':     'simple-icons:claude',
  'CR Toolkit': null,
}

export default function Skills({ t }) {
  return (
    <section id="skills" className="px-10 py-12 border-b border-border">
      <h2 className="text-2xl font-bold text-text mb-10">
        {t.skillsTitle}
      </h2>
      <div className="space-y-4 max-w-2xl">
        {t.skills.map(({ category, items }) => (
          <div key={category} className="flex flex-col sm:flex-row gap-2 sm:gap-6 sm:items-start">
            {/* Category: secondary heading */}
            <h3 className="text-sm font-semibold text-secondary w-32 shrink-0 pt-1">
              {category}
            </h3>
            {/* Skill tags */}
            <div className="flex flex-wrap gap-2">
              {items.map((item) => {
                const icon = ICON_MAP[item]
                return (
                  <span
                    key={item}
                    className="flex items-center gap-1 px-2 py-0.5 text-xs text-secondary bg-surface border border-border rounded hover:border-muted transition-colors"
                  >
                    {icon && (
                      <Icon icon={icon} className="w-3.5 h-3.5 shrink-0" />
                    )}
                    {item}
                  </span>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
