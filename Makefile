# Define a function to run scripts with fallback paths
# Will be used when git-hooks execute make command from .git/hooks directory
define run_script
	if [ -f "./scripts/$(1).sh" ]; then \
		./scripts/$(1).sh; \
	elif [ -f "../../scripts/$(1).sh" ]; then \
		../../scripts/$(1).sh; \
	else \
		echo "Error: $(1).sh script not found"; \
		exit 1; \
	fi
endef

# Targets using the run_script function
check_lint:
	$(call run_script,check_lint)

enable_commit_msg_hook:
	./scripts/enable_commit_msg_hook.sh

disable_commit_msg_hook:
	./scripts/disable_commit_msg_hook.sh

.PHONY: enable_commit_msg_hook disable_commit_msg_hook check_lint
