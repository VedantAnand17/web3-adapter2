# Web3 Adapter

A modern React-based Web3 adapter for Solana blockchain integration, featuring a clean UI built with Tailwind CSS and shadcn/ui components.

## Features

- 🔐 Secure wallet integration with Solana
- 💰 Real-time balance tracking
- 📤 Token transfer functionality
- ✍️ Message signing capabilities
- 🎨 Modern UI with Tailwind CSS and shadcn/ui
- 🌐 Devnet support with airdrop functionality

## Prerequisites

- Node.js 16.x or higher
- npm 7.x or higher

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/web3-adapter.git
cd web3-adapter
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── ui/            # shadcn/ui components
│   └── Background.jsx # Background component
├── lib/               # Utility functions and helpers
├── App.jsx            # Main application component
├── Balance.jsx        # Wallet balance component
├── RequestAirdrop.jsx # Airdrop request component
├── SendTokens.jsx     # Token transfer component
└── SignMessage.jsx    # Message signing component
```

## Features in Detail

### Wallet Connection
- Supports multiple Solana wallet providers
- Secure connection management
- Automatic reconnection

### Balance Tracking
- Real-time SOL balance updates
- Automatic refresh every 10 seconds
- Clear display in the UI

### Token Transfer
- Send SOL to any Solana address
- Input validation
- Transaction confirmation

### Message Signing
- Sign messages using your Solana wallet
- Signature verification
- Support for text messages

### Airdrop (Devnet)
- Request SOL tokens on devnet
- Simple amount input
- Quick transaction processing

## Technology Stack

- **Frontend Framework**: React 18
- **Blockchain**: Solana Web3.js
- **Wallet Adapters**: Solana Wallet Adapter
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Build Tool**: Vite
- **Development Environment**: Node.js

## Best Practices

This project follows these coding best practices:

1. **Component Structure**
   - Small, focused components
   - Single responsibility principle
   - Clear separation of concerns

2. **Code Organization**
   - Modular file structure
   - Consistent naming conventions
   - Logical grouping of related files

3. **State Management**
   - Efficient use of React hooks
   - Proper state isolation
   - Controlled component patterns

4. **Performance**
   - Optimized re-renders
   - Proper dependency management
   - Efficient blockchain interactions

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## Author

Made with ❤️ by Vedant Anand

### Connect with me

- GitHub: [@VedantAnand17](https://github.com/VedantAnand17)
- LinkedIn: [Vedant Anand](https://www.linkedin.com/in/vedantanand17)
- Twitter: [@Vedantsx](https://twitter.com/Vedantsx)
