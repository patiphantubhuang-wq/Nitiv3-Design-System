import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Guidelines/Usage',
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => (
    <div className="space-y-10 text-sm leading-relaxed text-foreground">
      <section className="space-y-3">
        <h1 className="text-2xl font-bold">🧩 Design System Overview</h1>
        <p className="font-medium">Single Source of Truth สำหรับ UI ทั้งหมด</p>
        <p>Design System นี้ถูกออกแบบมาเพื่อให้</p>
        <ul className="list-disc pl-5">
          <li>Component ใช้ซ้ำได้จริง</li>
          <li>รองรับหลาย Product โดยไม่ fork component</li>
          <li>ระบบไม่พังเมื่อ scale</li>
        </ul>
        <p>หัวใจของระบบคือ การแยก “หน้าที่” ของแต่ละ layer ให้ชัดเจน</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">🧱 Conceptual Model (อธิบายระบบทั้งก้อน)</h2>
        <p className="whitespace-pre-line">
          Design Foundations (Global Infrastructure)
          {'\n'}↓{'\n'}
          Theme Configuration (Base / Product)
          {'\n'}  └─ Semantic Design Tokens (อยู่ใน Theme)
          {'\n'}↓{'\n'}
          UI Components (Pure Consumers)
        </p>
        <p className="font-medium">
          ⚠️ นี่ไม่ใช่ลำดับการโหลดไฟล์ แต่มันคือ “ลำดับความรับผิดชอบ” ของระบบ
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">1️⃣ Design Foundations (Global Infrastructure)</h2>
        <h3 className="text-base font-semibold">คืออะไร</h3>
        <p>
          Design Foundations คือ token พื้นฐานที่ใช้ร่วมกันทั้งระบบ ไม่เปลี่ยนตาม Product
          และมีผลกับ Base Component ทุกตัว
        </p>
        <h3 className="text-base font-semibold">อยู่ที่ไหน</h3>
        <p className="font-mono text-xs">src/index.css</p>
        <h3 className="text-base font-semibold">ประกอบด้วย</h3>
        <ul className="list-disc pl-5">
          <li>Primitive Color Scale (Tailwind scale)</li>
          <li>Typography</li>
          <li>Spacing (8pt grid)</li>
          <li>Border Radius</li>
          <li>Shadow</li>
        </ul>
        <h3 className="text-base font-semibold">ตัวอย่าง</h3>
        <ul className="list-disc pl-5 font-mono text-xs">
          <li>--yellow-400</li>
          <li>--font-size-base</li>
          <li>--spacing-4</li>
          <li>--radius-md</li>
          <li>--shadow-lg</li>
        </ul>
        <h3 className="text-base font-semibold">กฎสำคัญ</h3>
        <ul className="list-disc pl-5">
          <li>✅ ใช้ร่วมกันทุก Product</li>
          <li>❌ Product ห้าม override</li>
          <li>❌ ห้ามใส่ semantic / UX meaning</li>
          <li>❌ ห้ามผูกกับ component ใดโดยเฉพาะ</li>
        </ul>
        <p className="font-medium">🔒 Foundations = Infrastructure → เปลี่ยน = กระทบทั้งระบบ</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">2️⃣ Theme Configuration (Context / Brand Layer)</h2>
        <p>
          Theme คือชั้นที่ใส่บริบทให้ระบบ บอกว่า Design System กำลังถูกใช้ใน context แบบไหน
        </p>
        <h3 className="text-base font-semibold">อยู่ที่ไหน</h3>
        <p className="font-mono text-xs whitespace-pre-line">
          src/themes/
          {'\n'}base.css
          {'\n'}juristic.css
          {'\n'}guard.css
          {'\n'}admin.css
        </p>
        <h3 className="text-base font-semibold">🔹 Base Theme (Neutral)</h3>
        <ul className="list-disc pl-5">
          <li>fallback ของระบบ</li>
          <li>ใช้ตอน render component แบบ standalone</li>
          <li>ไม่มี brand</li>
          <li>ทำให้ component “ไม่พัง” เมื่อไม่มี product</li>
        </ul>
        <h3 className="text-base font-semibold">🔹 Product Theme</h3>
        <ul className="list-disc pl-5">
          <li>แทน brand ของแต่ละ product</li>
          <li>เลือกใช้ primitive จาก Foundations</li>
          <li>override semantic token</li>
        </ul>
        <pre className="rounded-md border border-border bg-muted/40 p-3 text-xs">
{`:root[data-theme="juristic"] {\n  --primary: var(--yellow-400);\n}`}
        </pre>
        <h3 className="text-base font-semibold">กฎสำคัญ</h3>
        <ul className="list-disc pl-5">
          <li>✅ ใช้ primitive จาก index.css เท่านั้น</li>
          <li>❌ ห้ามสร้าง primitive ใหม่</li>
          <li>❌ ห้ามแตะ logic ของ component</li>
          <li>❌ ไม่ควร override typography / spacing / shadow</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">3️⃣ Semantic Design Tokens (Component-facing API)</h2>
        <p>
          Semantic Token ไม่ได้เป็น layer แยก มันอยู่ “ข้างใน Theme Configuration”
        </p>
        <p>Semantic Token คือ สัญญา (contract) ที่ Theme ให้กับ Component</p>
        <h3 className="text-base font-semibold">ตัวอย่าง</h3>
        <ul className="list-disc pl-5 font-mono text-xs">
          <li>--primary</li>
          <li>--secondary</li>
          <li>--background</li>
          <li>--foreground</li>
          <li>--destructive</li>
        </ul>
        <h3 className="text-base font-semibold">หน้าที่</h3>
        <ul className="list-disc pl-5">
          <li>เป็นภาษาที่ Component ใช้</li>
          <li>ไม่ใช่สีจริง</li>
          <li>ไม่รู้จัก Product</li>
          <li>Theme เป็นคนกำหนดความหมาย</li>
        </ul>
        <h3 className="text-base font-semibold">กฎสำคัญ</h3>
        <ul className="list-disc pl-5">
          <li>✅ Component ใช้ semantic เท่านั้น</li>
          <li>❌ Component ห้ามเรียก primitive</li>
          <li>❌ Semantic กลางห้ามผูก business เฉพาะ</li>
        </ul>
        <p className="font-medium">🧠 Semantic = API → เปลี่ยน = กระทบหลาย Component</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">4️⃣ UI Components (Pure Implementation / Consumer)</h2>
        <p>Component คือ ผู้ใช้งาน token ไม่ใช่ผู้ตัดสินใจ</p>
        <h3 className="text-base font-semibold">ตัวอย่างที่ถูก</h3>
        <pre className="rounded-md border border-border bg-muted/40 p-3 text-xs">
{`<button className="bg-primary text-primary-foreground" />`}
        </pre>
        <h3 className="text-base font-semibold">Component ต้อง</h3>
        <ul className="list-disc pl-5">
          <li>ใช้ semantic token เท่านั้น</li>
          <li>ไม่รู้จักสีจริง</li>
          <li>ไม่รู้จัก product</li>
          <li>ไม่รู้จัก theme logic</li>
        </ul>
        <h3 className="text-base font-semibold">ห้ามเด็ดขาด</h3>
        <ul className="list-disc pl-5">
          <li>❌ hardcode สี (bg-yellow-500)</li>
          <li>❌ if (theme === ...)</li>
          <li>❌ override token ใน component</li>
        </ul>
        <p className="font-medium">🎯 Component = Blind Consumer → ยิ่งรู้น้อย ระบบยิ่งแข็งแรง</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">🎨 Product-specific Components (ทำได้)</h2>
        <p>
          ถ้า Product ใดต้องมี component เฉพาะ (เช่น CommunitySwitcher):
        </p>
        <ul className="list-disc pl-5">
          <li>Compose จาก Base Component</li>
          <li>อยู่ใน folder ของ Product</li>
          <li>ใช้ Product Semantic Token</li>
        </ul>
        <pre className="rounded-md border border-border bg-muted/40 p-3 text-xs">
{`/* juristic theme */\n--community-switcher-bg\n--community-switcher-active`}
        </pre>
        <h3 className="text-base font-semibold">กฎ</h3>
        <ul className="list-disc pl-5">
          <li>✅ ทำ semantic ระดับ product ได้</li>
          <li>❌ ห้ามเอา semantic เฉพาะไปไว้กลาง</li>
          <li>❌ ยังไม่ต้อง promote ถ้าใช้ product เดียว</li>
        </ul>
        <p>Promote semantic เมื่อมี 2+ product ใช้จริงเท่านั้น</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">🎛 Storybook Usage</h2>
        <ul className="list-disc pl-5">
          <li>Storybook instance เดียว</li>
          <li>Switch Theme ได้จาก Toolbar</li>
          <li>โหมดที่มี: Base, Juristic, Guard, Admin</li>
          <li>Story ไม่ต้องเขียนซ้ำ</li>
          <li>Component เดิม render ต่างกันตาม Theme</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">🚫 Hard Rules (ห้ามฝ่าฝืน)</h2>
        <ul className="list-disc pl-5">
          <li>❌ ห้าม hardcode สีใน component</li>
          <li>❌ ห้าม product สร้าง primitive ใหม่</li>
          <li>❌ ห้าม fork base component ต่อ product</li>
          <li>❌ ห้ามเอา semantic เฉพาะ product ไปไว้กลาง</li>
          <li>❌ ห้าม override foundation token ต่อ product</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">🧠 Guiding Principles</h2>
        <ul className="list-disc pl-5">
          <li>Design Foundations = Infrastructure</li>
          <li>Theme = Configuration</li>
          <li>Semantic Token = API</li>
          <li>Component = Consumer</li>
          <li>Simplicity &gt; Over-engineering</li>
        </ul>
      </section>
    </div>
  ),
}
