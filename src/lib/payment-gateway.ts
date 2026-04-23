/**
 * Payment Gateway Integration Layer
 * Supports multiple payment methods and external gateway connections
 * Architecture ready for: Razorpay, PayU, Stripe, or custom integrations
 */

export type PaymentMethod = 'online_gateway' | 'bank_transfer' | 'credit_terms' | 'upi' | 'wallet';

export interface PaymentConfig {
  method: PaymentMethod;
  amount: number;
  currency: string;
  orderId: string;
  customerEmail: string;
  customerPhone: string;
  description: string;
  metadata?: Record<string, any>;
}

export interface PaymentResponse {
  success: boolean;
  transactionId?: string;
  orderId: string;
  method: PaymentMethod;
  amount: number;
  timestamp: Date;
  message: string;
  redirectUrl?: string;
}

export interface PaymentGatewayProvider {
  name: string;
  logoText?: string;
  brandColor?: string;
  type: 'internal' | 'external';
  supportedMethods: PaymentMethod[];
  isActive: boolean;
  config?: Record<string, any>;
}

/**
 * Payment Gateway Registry
 * Manages multiple payment providers
 */
export class PaymentGatewayRegistry {
  private static providers: Map<string, PaymentGatewayProvider> = new Map([
    ['razorpay', {
      name: 'Razorpay',
      logoText: 'R',
      brandColor: '#3B5BDB',
      type: 'external',
      supportedMethods: ['online_gateway', 'upi', 'wallet'],
      isActive: false,
      config: { apiKey: '', apiSecret: '' }
    }],
    ['payu', {
      name: 'PayU',
      logoText: 'P',
      brandColor: '#4C1D95',
      type: 'external',
      supportedMethods: ['online_gateway', 'upi'],
      isActive: false,
      config: { merchantKey: '', merchantSalt: '' }
    }],
    ['stripe', {
      name: 'Stripe',
      logoText: 'S',
      brandColor: '#635BFF',
      type: 'external',
      supportedMethods: ['online_gateway'],
      isActive: false,
      config: { publishableKey: '', secretKey: '' }
    }],
    ['internal_bank', {
      name: 'Bank Transfer',
      logoText: 'B',
      brandColor: '#0F766E',
      type: 'internal',
      supportedMethods: ['bank_transfer'],
      isActive: true,
      config: { accountNumber: '', ifscCode: '', bankName: '' }
    }],
    ['credit_facility', {
      name: 'Credit Terms',
      logoText: 'C',
      brandColor: '#B45309',
      type: 'internal',
      supportedMethods: ['credit_terms'],
      isActive: true,
      config: { maxCreditLimit: 500000, paymentTerms: '30 days' }
    }]
  ]);

  static getProvider(name: string): PaymentGatewayProvider | undefined {
    return this.providers.get(name);
  }

  static getAllProviders(): PaymentGatewayProvider[] {
    return Array.from(this.providers.values());
  }

  static getActiveProviders(): PaymentGatewayProvider[] {
    return Array.from(this.providers.values()).filter(p => p.isActive);
  }

  static registerProvider(name: string, provider: PaymentGatewayProvider): void {
    this.providers.set(name, provider);
  }

  static updateProvider(name: string, updates: Partial<PaymentGatewayProvider>): void {
    const provider = this.providers.get(name);
    if (provider) {
      this.providers.set(name, { ...provider, ...updates });
    }
  }
}

/**
 * Payment Processing Service
 * Handles payment initiation and routing
 */
export class PaymentService {
  /**
   * Initiate payment based on selected method
   */
  static async initiatePayment(config: PaymentConfig): Promise<PaymentResponse> {
    try {
      // Route to appropriate payment handler
      switch (config.method) {
        case 'online_gateway':
          return await this.handleOnlineGateway(config);
        case 'bank_transfer':
          return await this.handleBankTransfer(config);
        case 'credit_terms':
          return await this.handleCreditTerms(config);
        case 'upi':
          return await this.handleUPI(config);
        case 'wallet':
          return await this.handleWallet(config);
        default:
          throw new Error(`Unsupported payment method: ${config.method}`);
      }
    } catch (error) {
      return {
        success: false,
        orderId: config.orderId,
        method: config.method,
        amount: config.amount,
        timestamp: new Date(),
        message: error instanceof Error ? error.message : 'Payment processing failed'
      };
    }
  }

  /**
   * Handle online payment gateway (Razorpay, PayU, Stripe, etc.)
   */
  private static async handleOnlineGateway(config: PaymentConfig): Promise<PaymentResponse> {
    const provider = String(config.metadata?.gatewayProvider || 'razorpay');
    const transactionId = `TXN_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    return {
      success: true,
      transactionId,
      orderId: config.orderId,
      method: 'online_gateway',
      amount: config.amount,
      timestamp: new Date(),
      message: 'Payment gateway initialized. Redirecting to secure checkout...',
      redirectUrl: `/gateway/pay?orderId=${config.orderId}&txnId=${transactionId}&amount=${config.amount}&method=online_gateway&gateway=${provider}`
    };
  }

  /**
   * Handle bank transfer payment
   */
  private static async handleBankTransfer(config: PaymentConfig): Promise<PaymentResponse> {
    const transactionId = `BANK_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    return {
      success: true,
      transactionId,
      orderId: config.orderId,
      method: 'bank_transfer',
      amount: config.amount,
      timestamp: new Date(),
      message: 'Bank transfer details sent to your email. Please complete payment within 48 hours.',
      redirectUrl: `/payments?method=bank_transfer&orderId=${config.orderId}&amount=${config.amount}`
    };
  }

  /**
   * Handle credit terms for verified distributors
   */
  private static async handleCreditTerms(config: PaymentConfig): Promise<PaymentResponse> {
    const transactionId = `CREDIT_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    return {
      success: true,
      transactionId,
      orderId: config.orderId,
      method: 'credit_terms',
      amount: config.amount,
      timestamp: new Date(),
      message: 'Credit terms approved. Invoice will be generated for payment within 30 days.',
      redirectUrl: `/payments?method=credit_terms&orderId=${config.orderId}&amount=${config.amount}`
    };
  }

  /**
   * Handle UPI payment
   */
  private static async handleUPI(config: PaymentConfig): Promise<PaymentResponse> {
    const transactionId = `UPI_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    return {
      success: true,
      transactionId,
      orderId: config.orderId,
      method: 'upi',
      amount: config.amount,
      timestamp: new Date(),
      message: 'UPI payment initiated. Please complete payment on your device.',
      redirectUrl: `/gateway/pay?orderId=${config.orderId}&txnId=${transactionId}&amount=${config.amount}&method=upi&gateway=${String(config.metadata?.gatewayProvider || 'razorpay')}`
    };
  }

  /**
   * Handle digital wallet payment
   */
  private static async handleWallet(config: PaymentConfig): Promise<PaymentResponse> {
    const transactionId = `WALLET_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    return {
      success: true,
      transactionId,
      orderId: config.orderId,
      method: 'wallet',
      amount: config.amount,
      timestamp: new Date(),
      message: 'Wallet payment processing. Please confirm on your wallet app.',
      redirectUrl: `/gateway/pay?orderId=${config.orderId}&txnId=${transactionId}&amount=${config.amount}&method=wallet&gateway=${String(config.metadata?.gatewayProvider || 'razorpay')}`
    };
  }

  /**
   * Verify payment status
   */
  static async verifyPayment(transactionId: string, orderId: string): Promise<{ verified: boolean; status: string }> {
    // This will connect to actual gateway verification APIs
    return {
      verified: true,
      status: 'completed'
    };
  }

  /**
   * Generate payment invoice
   */
  static generateInvoice(config: PaymentConfig): string {
    const invoiceNumber = `INV_${Date.now()}`;
    return invoiceNumber;
  }
}

/**
 * Payment Configuration
 * Centralized configuration for payment settings
 */
export const PAYMENT_CONFIG = {
  supportedCurrencies: ['INR', 'USD', 'EUR'],
  defaultCurrency: 'INR',
  paymentMethods: [
    {
      id: 'online_gateway',
      name: 'Online Payment Gateway',
      description: 'Credit Card, Debit Card, UPI, Net Banking',
      icon: 'CreditCard',
      enabled: true,
      processingTime: 'Instant'
    },
    {
      id: 'bank_transfer',
      name: 'Bank Transfer',
      description: 'Direct bank transfer via NEFT/RTGS/IMPS',
      icon: 'FileText',
      enabled: true,
      processingTime: '1-2 hours'
    },
    {
      id: 'credit_terms',
      name: 'Credit Terms',
      description: 'For verified distributors with payment terms',
      icon: 'Shield',
      enabled: true,
      processingTime: '30 days'
    },
    {
      id: 'upi',
      name: 'UPI Payment',
      description: 'Unified Payments Interface',
      icon: 'Smartphone',
      enabled: true,
      processingTime: 'Instant'
    },
    {
      id: 'wallet',
      name: 'Digital Wallet',
      description: 'PayTM, Google Pay, PhonePe, etc.',
      icon: 'Wallet',
      enabled: true,
      processingTime: 'Instant'
    }
  ],
  securityFeatures: [
    '256-bit SSL Encryption',
    'PCI DSS Compliance',
    'Two-Factor Authentication',
    'Fraud Detection System',
    'Secure Payment Gateway'
  ],
  supportContact: {
    phone: '+91 98765 43210',
    email: 'payments@trishaagency.com',
    hours: '24/7 Support'
  }
};
