export interface DocumentRootVO {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  alias: string;
  description: string;
  thumbnail: string;
  is_public: boolean;
};

export interface DocumentTreeVO {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  document_type: string;
  is_public: boolean;
  parent_id: string;
  document_id: string;
};

export interface DocumentTreeNode {
  id: string;
  title: string;
  items: DocumentTreeNode[];
  is_leaf: boolean;
}

export interface DocumentVO {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  content: string;
  document_type: string;
  parent_id: string;
  document_id: string;
}

export interface DocumentSearchDTO {
  keyword: string;
  document_id: string;
}