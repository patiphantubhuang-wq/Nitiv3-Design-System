import type { Meta, StoryObj } from '@storybook/react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from '@/components/ui/sidebar'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Home,
  Bell,
  CreditCard,
  Users as UsersIcon,
  Calendar,
  Wrench,
  Package,
  MessageSquare,
  Phone,
  ClipboardList,
  Scale,
  Settings,
  LayoutDashboard,
  Grid3x3,
  AlertTriangle,
  Users,
  User,
  HeartHandshake,
  UserX,
  HelpCircle,
  BookOpen,
  ChevronsUpDown,
  ChevronRight,
  Menu,
  FileText,
  Cookie,
  Coins,
  LogOut,
} from 'lucide-react'

const meta: Meta = {
  title: 'Templates/Page Standard',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Mockup ของหน้า Dashboard ระบบ NITI V3

หน้านี้แสดงโครงสร้างหลักของ Dashboard ที่มี:
- Sidebar navigation ด้านซ้าย
- Header bar ด้านบน
- Main content area พร้อม Dashboard cards และ News section
        `,
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Dashboard: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar className="bg-sidebar text-sidebar-foreground">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild className="hover:bg-transparent">
                <a href="#" className="flex items-center gap-3">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <span className="text-xs font-bold">NITI</span>
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold text-sidebar-foreground">เออบันไนซ์ นิติฯ</span>
                    <span className="truncate text-xs text-sidebar-foreground/70">ระบบจัดการชุมชน</span>
                  </div>
                  <ChevronsUpDown className="h-4 w-4 text-sidebar-foreground/70" />
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive>
                    <a href="#">
                      <Home className="h-4 w-4" />
                      <span>หน้าหลัก</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <Bell className="h-4 w-4" />
                      <span>ประกาศ</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <CreditCard className="h-4 w-4" />
                      <span>ค่าใช้จ่าย</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <UsersIcon className="h-4 w-4" />
                      <span>ทะเบียน</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <Calendar className="h-4 w-4" />
                      <span>จองส่วนกลาง</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <Wrench className="h-4 w-4" />
                      <span>แจ้งซ่อม</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <Package className="h-4 w-4" />
                      <span>พัสดุ</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <MessageSquare className="h-4 w-4" />
                      <span>แชทกับนิติฯ</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <Phone className="h-4 w-4" />
                      <span>สมุดโทรศัพท์</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <ClipboardList className="h-4 w-4" />
                      <span>กระดานงาน</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <Calendar className="h-4 w-4" />
                      <span>การประชุมใหญ่</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <Scale className="h-4 w-4" />
                      <span>ข้อเสนอแนะ</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <Settings className="h-4 w-4" />
                      <span>ตั้งค่า</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <HelpCircle className="h-4 w-4" />
                      <span>ขอความช่วยเหลือ</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <BookOpen className="h-4 w-4" />
                      <span>คู่มือการใช้งาน</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <div className="mt-auto border-t border-sidebar-border pt-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="w-full">
                  <div className="flex items-center gap-3 w-full">
                    <Avatar>
                      <AvatarFallback className="bg-sidebar-accent text-sidebar-accent-foreground border border-sidebar-border">
                        P
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 text-left">
                      <p className="text-sm font-medium text-sidebar-foreground">ปฏิภาณ ทับห่วง</p>
                      <p className="text-xs text-sidebar-foreground/70">patiphan.t@theliv...</p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-sidebar-foreground/70" />
                  </div>
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" side="right" className="w-64">
                {/* User Info Section */}
                <div className="px-2 py-1.5">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-sidebar-accent text-sidebar-accent-foreground border border-sidebar-border">
                        P
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 text-left">
                      <p className="text-sm font-medium text-foreground">ปฏิภาณ ทับห่วง</p>
                      <p className="text-xs text-muted-foreground">patiphan.t@thelivingos.com</p>
                    </div>
                  </div>
                </div>
                <DropdownMenuSeparator />
                
                {/* Legal Section */}
                <DropdownMenuLabel className="px-2 py-1.5 text-xs font-semibold text-foreground">
                  ข้อกฎหมาย
                </DropdownMenuLabel>
                <DropdownMenuItem>
                  <FileText className="h-4 w-4" />
                  <span>นโยบายความเป็นส่วนตัว</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <FileText className="h-4 w-4" />
                  <span>ข้อกำหนดการใช้งาน</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Cookie className="h-4 w-4" />
                  <span>นโยบายการใช้คุ้กกี้</span>
                </DropdownMenuItem>
                
                <DropdownMenuSeparator />
                
                {/* Admin Tools Section */}
                <DropdownMenuLabel className="px-2 py-1.5 text-xs font-semibold text-foreground">
                  เครื่องมือผู้ดูแล
                </DropdownMenuLabel>
                <DropdownMenuItem>
                  <Coins className="h-4 w-4" />
                  <span>การเรียกเก็บเงิน</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="h-4 w-4" />
                  <span>การจัดการสิทธิ์</span>
                </DropdownMenuItem>
                
                <DropdownMenuSeparator />
                
                {/* Logout */}
                <DropdownMenuItem className="text-destructive focus:text-destructive">
                  <LogOut className="h-4 w-4" />
                  <span>ออกจากระบบ</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        {/* Header Bar */}
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <div className="flex flex-1 items-center justify-end gap-4">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Grid3x3 className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              <span className="text-sm">แอปพลิเคชัน</span>
              <Badge variant="default" className="bg-primary text-primary-foreground">
                NEW
              </Badge>
            </div>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] text-destructive-foreground">
                44
              </span>
            </Button>
            <div className="flex items-center gap-2">
              <span className="text-sm">มูนวิวริเวอร์ไซด์ @บางชื่อ</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">Patiphan 'Park' Tubhuang</span>
              <Avatar>
                <AvatarFallback className="bg-accent text-accent-foreground">P</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex flex-1 flex-col gap-4 p-6">
          {/* Alert Banner */}
          <Alert className="border-status-warning bg-status-warning text-status-warning-foreground">
            <AlertTriangle className="h-4 w-4 text-status-warning-foreground" />
            <AlertTitle className="text-status-warning-foreground">
              แจ้งเตือน
            </AlertTitle>
            <AlertDescription className="text-status-warning-foreground/80">
              ตั้งแต่วันที่ 6 พ.ย. 2568 เป็นต้นไป เมนูด้านความปลอดภัยได้แก่
              ผู้มาติดต่อ, ตรวจจุด, รายงานเหตุการณ์ จะถูกย้ายมารวมที่เมนู New
              ด้านบน ภายใต้ชื่อเมนู GuardOS
            </AlertDescription>
          </Alert>

          {/* Page Title */}
          <div>
            <h1 className="text-3xl font-bold">หน้าหลัก</h1>
          </div>

          {/* Dashboard Cards */}
          <div className="grid gap-4 md:grid-cols-3">
            {/* Card 1: Image Card */}
            <Card className="overflow-hidden p-0">
              <div className="relative h-64 w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/70 to-primary" />
                <div className="absolute left-4 top-4 text-primary-foreground">
                  <p className="text-lg font-semibold">มูนวิวริเวอร์ไซด์ @บางชื่อ</p>
                </div>
              </div>
            </Card>

            {/* Card 2: Usage Statistics */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">จำนวนยูนิตที่ใช้แอปฯ</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center space-y-4">
                <div className="relative flex items-center justify-center">
                  <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-primary bg-primary/10">
                    <Users className="h-16 w-16 text-primary" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold">6%</p>
                  <p className="text-lg text-muted-foreground">25/389</p>
                </div>
                <CardDescription className="text-xs">
                  ข้อมูล ณ วันที่ 12 ม.ค. 69, 17:23
                </CardDescription>
              </CardContent>
            </Card>

            {/* Card 3: User Statistics */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">จำนวนผู้ใช้ 51 คน</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center space-y-2">
                    <User className="h-8 w-8 text-status-info" />
                    <p className="text-2xl font-bold">19</p>
                    <p className="text-sm text-muted-foreground">ผู้ชาย</p>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <User className="h-8 w-8 text-status-warning" />
                    <p className="text-2xl font-bold">11</p>
                    <p className="text-sm text-muted-foreground">ผู้หญิง</p>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <HeartHandshake className="h-8 w-8 text-status-success" />
                    <p className="text-2xl font-bold">8</p>
                    <p className="text-sm text-muted-foreground">LGBTQ</p>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <UserX className="h-8 w-8 text-status-pending" />
                    <p className="text-2xl font-bold">13</p>
                    <p className="text-sm text-muted-foreground">ไม่ระบุ</p>
                  </div>
                </div>
                <CardDescription className="mt-4 text-center text-xs">
                  ข้อมูล ณ วันที่ 12 ม.ค. 69, 17:23
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* News Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold">ข่าวสารจาก Urbanice</h2>
              <Badge variant="default" className="bg-primary text-primary-foreground">
                NEW
              </Badge>
            </div>

            <div className="space-y-3">
              {[
                {
                  title:
                    'i-Vote โปรแกรมจัดประชุมใหญ่สามัญประจำปี ตัวช่วยลดปัญหาองค์ประชุมไม่ครบ',
                  date: '12 ม.ค. 2569',
                  time: '14:30',
                  isNew: true,
                },
                {
                  title:
                    'เปลี่ยนการเก็บค่าส่วนกลางคอนโด ให้จ่ายง่ายขึ้นด้วยระบบ Digital Payment',
                  date: '10 ม.ค. 2569',
                  time: '10:15',
                  isNew: false,
                },
                {
                  title:
                    'หมดยุคกล้องอย่างเดียว! คอนโดต้องมีระบบความปลอดภัยที่เหนือกว่าเดิม',
                  date: '8 ม.ค. 2569',
                  time: '09:00',
                  isNew: false,
                },
                {
                  title:
                    'เปลี่ยนระบบไม้กั้นเดิมให้ฉลาดขึ้น ด้วย LivingOS Smart Gate',
                  date: '5 ม.ค. 2569',
                  time: '16:45',
                  isNew: false,
                },
                {
                  title:
                    'ร่วมทำแบบสอบถาม เพื่อพัฒนาระบบ Access Control สำหรับโครงการของคุณ',
                  date: '3 ม.ค. 2569',
                  time: '11:20',
                  isNew: false,
                },
              ].map((news, index) => (
                <Card key={index} className="hover:bg-accent">
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded bg-muted">
                      <LayoutDashboard className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <a
                          href="#"
                          className="text-primary hover:underline"
                        >
                          {news.title}
                        </a>
                        {news.isNew && (
                          <Badge variant="default" className="bg-primary text-primary-foreground">
                            NEW
                          </Badge>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">
                        ประกาศเมื่อ: {news.date}, {news.time} น.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="pt-4">
              <Button variant="ghost" className="w-full">
                ดึงข้อมูลอีก 5 รายการย้อนหลัง
              </Button>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
            <p>Urbanice Niti ©2019-2025 Created by Urbanice.app 3.6.21-2</p>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  ),
}
