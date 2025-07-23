import { DocumentTreeVO } from "@/types/doc";
import { DocTreeItem } from "@/types/doctree";

export function convertToTreeData(
  data: DocumentTreeVO[],
  alias: string
): DocTreeItem[] {
  const map = new Map<string, DocTreeItem>();

  if (data === undefined) {
    return [];
  }

  // 先创建所有节点
  for (const doc of data) {
    map.set(doc.id, {
      title: doc.title,
      url: `/doc/${alias}/${doc.document_id}/${doc.id}`,
    });
  }

  const tree: DocTreeItem[] = [];
  for (const doc of data) {
    const node = map.get(doc.id)!;
    // 如果 parent_id 为空或者等于 document_id，说明是根节点
    if (!doc.parent_id || doc.parent_id === doc.document_id || !map.has(doc.parent_id)) {
      tree.push(node);
    } else {
      const parent = map.get(doc.parent_id)!;
      if (!parent.items) parent.items = [];
      parent.items.push(node);
    }
  }

  return tree;
}