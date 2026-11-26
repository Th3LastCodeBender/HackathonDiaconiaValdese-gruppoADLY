import { createContext, useContext, useState, type ReactNode } from 'react';

export interface Delivery {
  id: string;
  guestName: string;
  objectType: string;
  objectLabel: string;
  description: string;
  createdAt: string;
  status: 'pending' | 'accepted';
  facilityName: string;
}

interface DeliveryContextType {
  deliveries: Delivery[];
  addDelivery: (d: Omit<Delivery, 'id' | 'createdAt' | 'status'>) => void;
  removeDelivery: (id: string) => void;
  markAccepted: (id: string) => void;
}

const DeliveryContext = createContext<DeliveryContextType | null>(null);

export function DeliveryProvider({ children }: { children: ReactNode }) {
  const [deliveries, setDeliveries] = useState<Delivery[]>([]);

  const addDelivery = (d: Omit<Delivery, 'id' | 'createdAt' | 'status'>) =>
    setDeliveries(prev => [...prev, { ...d, id: `d-${Date.now()}`, createdAt: new Date().toISOString(), status: 'pending' }]);

  const removeDelivery = (id: string) =>
    setDeliveries(prev => prev.filter(d => d.id !== id));

  const markAccepted = (id: string) =>
    setDeliveries(prev => prev.map(d => d.id === id ? { ...d, status: 'accepted' } : d));

  return (
    <DeliveryContext.Provider value={{ deliveries, addDelivery, removeDelivery, markAccepted }}>
      {children}
    </DeliveryContext.Provider>
  );
}

export function useDelivery() {
  const ctx = useContext(DeliveryContext);
  if (!ctx) throw new Error('useDelivery must be used within DeliveryProvider');
  return ctx;
}
