import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { LoginPage } from "./pages/LoginPage"
import { AuthProvider } from "./context/AuthContext"
import { NotificationProvider } from "./context/NotificationContext"
import { DeliveryProvider } from "./context/DeliveryContext"
import { GlobalLayout } from "./components/layout/GlobalLayout"
import { DashboardIndex } from "./pages/dashboard/DashboardIndex"
import { CalendarPage } from "./pages/dashboard/CalendarPage"
import { GuestManagementPage } from "./pages/dashboard/GuestManagementPage"
import { AutonomyPage } from "./pages/dashboard/AutonomyPage"
import { ProfilePage } from "./pages/dashboard/ProfilePage"
import { Toaster } from "./components/ui/toaster"
import { DeliveryPage } from "./pages/dashboard/DeliveryPage"
import { MonthlyReportPage } from "./pages/report/guestReport"
import { FacilityReportsPage } from "./pages/report/FacilityReportsPage"

function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <DeliveryProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login/:roleId" element={<LoginPage />} />

              <Route path="/dashboard" element={<GlobalLayout />}>
                <Route index element={<DashboardIndex />} />
                <Route path="calendar" element={<CalendarPage />} />
                <Route path="guests">
                  <Route index element={<GuestManagementPage />} />
                  <Route path="add" element={<GuestManagementPage />} />
                  <Route path="list" element={<GuestManagementPage />} />
                  <Route path="delivery" element={<DeliveryPage />} />
                  <Route path="report/:id" element={<MonthlyReportPage />} />
                </Route>
                <Route path="profile" element={<ProfilePage />} />
                <Route path="profile/:userId" element={<ProfilePage />} />
                <Route path="autonomy" element={<AutonomyPage />} />
                <Route path="board" element={<div>Bacheca Placeholder (Fase 6)</div>} />
              </Route>

              <Route path="/reports/:facilityId" element={<GlobalLayout />}>
                <Route index element={<FacilityReportsPage />} />
              </Route>

              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
          <Toaster />
        </DeliveryProvider>
      </NotificationProvider>
    </AuthProvider>
  )
}

export default App
