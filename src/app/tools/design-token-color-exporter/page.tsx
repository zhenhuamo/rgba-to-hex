import { metadata } from './metadata';
import ClientEntry from './ClientEntry';

export { metadata };

/**
 * 之前这个页面在服务端 await `searchParams`，会强制动态渲染并阻塞静态导出。
 * 现在服务端只渲染默认状态（HTML 里带完整工具 UI），query 参数在客户端挂载后
 * 由 ClientEntry 读入，行为对整个工具链路保持不变。
 */
export default function DesignTokenColorExporterPage() {
  return <ClientEntry />;
}
