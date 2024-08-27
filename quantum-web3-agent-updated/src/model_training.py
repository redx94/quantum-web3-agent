import transformers
from transformers import GPT2LMHeadModel, GPT2Tokenizer

# © 2024 Reece Dixon. All rights reserved.

# Load the pre-trained model and tokenizer
model_name = "gpt-4"
tokenizer = GPT2Tokenizer.from_pretrained(model_name)
model = GPT2LMHeadModel.from_pretrained(model_name)

# Fine-tune the model on a specific code dataset
from transformers import TextDataset, DataCollatorForLanguageModeling, Trainer, TrainingArguments

# © 2024 Reece Dixon. All rights reserved.

def load_dataset(file_path, tokenizer):
    return TextDataset(
        tokenizer=tokenizer,
        file_path=file_path,
        block_size=128
    )

train_dataset = load_dataset("path_to_train_dataset", tokenizer)
test_dataset = load_dataset("path_to_test_dataset", tokenizer)

data_collator = DataCollatorForLanguageModeling(
    tokenizer=tokenizer,
    mlm=True,
    mlm_probability=0.15
)

training_args = TrainingArguments(
    output_dir="./results",
    overwrite_output_dir=True,
    num_train_epochs=3,
    per_device_train_batch_size=4,
    save_steps=10_000,
    save_total_limit=2,
)

trainer = Trainer(
    model=model,
    args=training_args,
    data_collator=data_collator,
    train_dataset=train_dataset,
    eval_dataset=test_dataset,
)

trainer.train()

# Save the fine-tuned model
model.save_pretrained("path_to_save_model")
tokenizer.save_pretrained("path_to_save_model")
