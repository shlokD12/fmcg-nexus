/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: contactenquiries
 * Interface for ContactEnquiries
 */
export interface ContactEnquiries {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  senderName?: string;
  /** @wixFieldType text */
  email?: string;
  /** @wixFieldType text */
  phoneNumber?: string;
  /** @wixFieldType text */
  subject?: string;
  /** @wixFieldType text */
  message?: string;
  /** @wixFieldType datetime */
  submissionDateTime?: Date | string;
}


/**
 * Collection ID: distributorenquiries
 * Interface for DistributorEnquiries
 */
export interface DistributorEnquiries {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  businessName?: string;
  /** @wixFieldType text */
  contactPerson?: string;
  /** @wixFieldType text */
  phoneNumber?: string;
  /** @wixFieldType text */
  emailAddress?: string;
  /** @wixFieldType text */
  cityState?: string;
  /** @wixFieldType text */
  productInterest?: string;
  /** @wixFieldType text */
  expectedVolume?: string;
  /** @wixFieldType text */
  message?: string;
}


/**
 * Collection ID: manufacturedproducts
 * @catalog This collection is an eCommerce catalog
 * Interface for ManufacturedProducts
 */
export interface ManufacturedProducts {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  itemName?: string;
  /** @wixFieldType number */
  itemPrice?: number;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  itemImage?: string;
  /** @wixFieldType text */
  itemDescription?: string;
  /** @wixFieldType text */
  productCategory?: string;
  /** @wixFieldType text */
  qualityHighlights?: string;
}


/**
 * Collection ID: productcategories
 * Interface for ProductCategories
 */
export interface ProductCategories {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  categoryName?: string;
  /** @wixFieldType text */
  division?: string;
  /** @wixFieldType text */
  categoryDescription?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  categoryImage?: string;
  /** @wixFieldType boolean */
  isActive?: boolean;
  /** @wixFieldType number */
  sortOrder?: number;
}


/**
 * Collection ID: stockistproducts
 * @catalog This collection is an eCommerce catalog
 * Interface for StockistProducts
 */
export interface StockistProducts {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  itemName?: string;
  /** @wixFieldType number */
  itemPrice?: number;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  itemImage?: string;
  /** @wixFieldType text */
  brandName?: string;
  /** @wixFieldType text */
  category?: string;
  /** @wixFieldType boolean */
  bulkAvailability?: boolean;
  /** @wixFieldType text */
  itemDescription?: string;
}
