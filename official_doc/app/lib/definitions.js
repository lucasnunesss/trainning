// Este arquivo contém definições de dados para o seu projeto.
// Ele descreve o formato dos dados e quais tipos de dados cada propriedade deve aceitar.

export const User = {
  id: '',
  name: '',
  email: '',
  password: '',
};

export const Customer = {
  id: '',
  name: '',
  email: '',
  image_url: '',
};

export const Invoice = {
  id: '',
  customer_id: '',
  amount: 0,
  date: '',
  // A propriedade "status" pode ter apenas um dos dois valores: 'pending' ou 'paid'.
  status: 'pending', // ou 'paid'
};

export const Revenue = {
  month: '',
  revenue: 0,
};

export const LatestInvoice = {
  id: '',
  name: '',
  image_url: '',
  email: '',
  amount: '',
};

// O banco de dados retorna um número para o valor "amount", mas o formatamos como uma string depois.
export const LatestInvoiceRaw = {
  ...LatestInvoice,
  amount: 0,
};

export const InvoicesTable = {
  id: '',
  customer_id: '',
  name: '',
  email: '',
  image_url: '',
  date: '',
  amount: 0,
  status: 'pending', // ou 'paid'
};

export const CustomersTableType = {
  id: '',
  name: '',
  email: '',
  image_url: '',
  total_invoices: 0,
  total_pending: 0,
  total_paid: 0,
};

export const FormattedCustomersTable = {
  id: '',
  name: '',
  email: '',
  image_url: '',
  total_invoices: 0,
  total_pending: '',
  total_paid: '',
};

export const CustomerField = {
  id: '',
  name: '',
};

export const InvoiceForm = {
  id: '',
  customer_id: '',
  amount: 0,
  status: 'pending', // ou 'paid'
};
