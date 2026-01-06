
// Add React import to resolve React namespace issues in .ts files
import React from 'react';

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}
