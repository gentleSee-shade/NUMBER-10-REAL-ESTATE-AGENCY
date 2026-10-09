import React, { createContext, useContext, useState, useEffect } from 'react';
import { BRAND } from '../data/brand';

export type Currency = 'GHS' | 'USD';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  toggleCurrency: () => void;
  formatPrice: (amountGhs: number, rentPeriod?: 'month') => string;
  usdRate: number;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

const STORAGE_KEY = 'n10_currency_pref';

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrencyState] = useState<Currency>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'GHS' || stored === 'USD') {
        return stored;
      }
    } catch {
      // Fallback if localStorage is inaccessible
    }
    return 'GHS';
  });

  const setCurrency = (c: Currency) => {
    setCurrencyState(c);
    try {
      localStorage.setItem(STORAGE_KEY, c);
    } catch {
      // Ignore write errors
    }
  };

  const toggleCurrency = () => {
    setCurrency(currency === 'GHS' ? 'USD' : 'GHS');
  };

  const formatPrice = (amountGhs: number, rentPeriod?: 'month') => {
    if (currency === 'GHS') {
      const formatted = new Intl.NumberFormat('en-GH', {
        maximumFractionDigits: 0,
      }).format(amountGhs);
      return rentPeriod ? `GH₵ ${formatted} / ${rentPeriod}` : `GH₵ ${formatted}`;
    } else {
      const amountUsd = Math.round(amountGhs / BRAND.usdRate);
      const formatted = new Intl.NumberFormat('en-US', {
        maximumFractionDigits: 0,
      }).format(amountUsd);
      return rentPeriod ? `$${formatted} / ${rentPeriod}` : `$${formatted}`;
    }
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        toggleCurrency,
        formatPrice,
        usdRate: BRAND.usdRate,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = (): CurrencyContextType => {
  const ctx = useContext(CurrencyContext);
  if (!ctx) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return ctx;
};
