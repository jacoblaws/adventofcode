{
  description = "advent of code development flake";

  inputs = {
    nixpkgs.url = "github:/nixos/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
    rust-overlay.url = "github:oxalica/rust-overlay";
  };

  outputs = { nixpkgs, flake-utils, rust-overlay, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        overlays = [ (import rust-overlay) ];
        pkgs = import nixpkgs { inherit system overlays; };
      in {
        devShells = with pkgs; {
          nodejs = mkShell {
            buildInputs = [
              nodejs
              nodePackages.typescript
              nodePackages.typescript-language-server
            ];
          };

          rust = mkShell {
            buildInputs = [ rust-bin.beta.latest.default ];
          };
        };
      }
    );
}
